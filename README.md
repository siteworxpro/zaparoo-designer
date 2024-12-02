# TapTo Designer

This is a companion app to the TapTo system
You can read more about TapTo [here](https://github.com/wizzomafizzo/tapto) 

# How to use it

This app is deploted at [https://tapto-designer.netlify.app/](https://tapto-designer.netlify.app/) and you can just use it, providing your own images or using the embedded search functionality.
It has no server, no login, no way to save progress.
Is meant for producing labels and download the result right away.
Everything runs locally, your images aren't unploaded to any server.

You can load files by drag and drop or by browsing your file system

<img width="993" alt="image" src="https://github.com/asturur/nfc-retro-label-printer/assets/1194048/73c39227-b0bf-4c88-ac58-a4209e46c31e">

Once you load some files you are presented with a default grid of cards with the default template:

<img width="1382" alt="image" src="https://github.com/asturur/nfc-retro-label-printer/assets/1194048/06ac2545-db43-47fb-a230-e725d595c1a5">

## Build and run locally using Docker

Get [docker](https://www.docker.com/)

Build
```shell
docker build -t tapto-designer:latest .
docker run --rm -it -p 8080:80 tapto-designer:latest 
```

Run a prebuilt image (Linux/Mac Only)
### run the prebuilt image
```shell
docker run --rm -it -p 8080:80 siteworxpro/tapto-designer:latest 
```
