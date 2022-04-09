
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
	
#     header("Access-Control-Allow-Origin: http://localhost:4200");   
#     header("Content-Type: application/json; charset=UTF-8");    
#     header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");    
#     header("Access-Control-Max-Age: 3600");    
#     header("Access-Control-Allow-Headers: TOKEN, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
