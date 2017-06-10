TARGET=main
all: $(TARGET)

main: .
	jekyll build
	rsync -r _site/* ewu@clic.cs.columbia.edu:~/html
	ssh ewu@clic.cs.columbia.edu 'cd html; chmod -R 775 *.html files ducao'

