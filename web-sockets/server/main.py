#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

import asyncio
import websockets

CLIENTS = set()

async def response(websocket, path):
  CLIENTS.add(websocket)
  async for message in websocket:
    for client in CLIENTS:
      await client.send(message)
async def main():
  async with websockets.serve(response, "localhost", 8765):
    await asyncio.Future()

asyncio.run(main())
