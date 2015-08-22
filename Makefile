TARGET=main
all: $(TARGET)

main: index.html
	git commit -am "updated website"
	git push
	ssh eugenewu@athena.dialup.mit.edu "cd www; git pull"
	ssh ewu@clic.cs.columbia.edu 'cd ~/html/4111; git pull; chmod -R 775 *.html website/*'
