TARGET=main
all: $(TARGET)

main: index.html
	git commit -am "updated website"
	git push
	ssh eugenewu@athena.dialup.mit.edu "cd www; git pull"
