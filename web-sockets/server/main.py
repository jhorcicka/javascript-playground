#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

import asyncio
import websockets

CLIENTS = set()

async def response(websocket, path):
  CLIENTS.add(websocket)
  async for message in websocket:
    print("Message: " + message)
    for client in CLIENTS:
      await client.send(message)
async def main():
  print("Server started on port 8765. ")
  async with websockets.serve(response, "localhost", 8765):
    await asyncio.Future()

asyncio.run(main())
