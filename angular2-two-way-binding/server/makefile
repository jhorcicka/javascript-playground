
MAIN=main.py
ARGS=""
SRC=*.py 
PACK=mainPython.zip

all: run

run: $(MAIN)
	python3 $(MAIN) $(ARGS)

pack: 
	zip -r $(PACK) $(SRC) makefile

edit:
	gvim -p *.py
