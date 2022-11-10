# Images Submission Project

## Status
This `protoype` is COMPLETED.

## Objective
Collect images and build dataset for automated stock counting system.

**using** : Express - React and Node.

###### This prototype version use a `.csv` file as a database.

## Ouput -> Images Dataset
image path  => `/server/uploaded_files`

file name   => `[class]_[box/pcs]_[countResult].jpg`


## Reqirements
   [NodeJs](https://nodejs.org/en/) : `^19.0.0`.

## Download Project
```
git clone https://github.com/techaploog/image-submission.git
```
or download a [zip file](https://github.com/techaploog/image-submission/archive/refs/heads/main.zip)

## Start Server Guide
1. cd image-submitting
2. npm run install
3. npm run deploy

**  These npm script works for `Windows` OS.

*** `linux` and `macOS` need to update `scripts` in `package.json` 

before run `npm run deploy` script.
```
/package.json
/client/package.json
```

### Update Items List
Update items list manually at `/server/data/counting_list.csv`.

## Server URL
```
deployment server : 
            http://localhost:8000

development server :
 (frontend) http://localhost:3000
 (backend)  http://localhost:8000
```
