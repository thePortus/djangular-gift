<<<<<<< HEAD
# USF-GIFT
Global Interdisciplinary Food Technologies (GIFT) Knowledge Repository
[University of South Florida](http://www.usf.edu/)

### [This project is possible thanks to generous funding provided by the Patel Center for Global Sustainability.](http://www.usf.edu/pcgs/)

**OSX/Linux Only**

---

**THIS IS THE SUBREPOSITORY FOR THE YO GENERATOR APP TEMPLATE. [USE THE MAIN GENERATOR REPO](https://github.com/thePortus/generator-djangular-gift).**

---

## Preface
Full Stack DjangularJS Yeoman Scaffolding Generator. Yeoman generator optimized for the USF-GIFT project.

GIFT (Global Interdisciplinary Food Technologies) Knowledge Repository is a data curation and analysis app allowing scholars from any field relating to food sustainability issues to upload data, link to previously exisiting collections, and perform mass aggregates.

## Project Credits
* Michael J. Decker, Project Director, mjdecker@usf.edu
* David J. Thomas, Developer, davidjthomas@usf.edu
* Howard Kaplan, Developer, howardkaplan@usf.edu
* Herbert Maschner, Project Partner, maschner@usf.edu
* Diane Wallman, Project Parter, dianewallman@usf.edu
* George Philippidis, Project Partner, gphilippidis@usf.edu
* Qiong Zhang, Project Partner, qiongzhang@usf.edu

---

## Contents
* [Preface](#preface)
* [Credits](#project-credits)
* [Installing the Scaffolding](#installing-the-scaffolding)
* [Configuring the Virtual Machine](#setting-up-the-vm)
* [Yo Generator Cheat Sheet](#yo-cheat-sheet)
* [Stack Components](#stack-components)
* [Digital Credits](#digital-credits)
* [License](#license)

---

## Installing the Scaffolding

OSX Specific Pre-Installation
``` shell
# Brings up dialog to download & install X-Code's minimal command-line tools
$ xcode-select --install
# Issue command to d/l and install OSX's package manager, Homebrew
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
# Homebrew to install NodeJS and Node Package Manager (npm)
$ brew install node
# Homebrew Cask to install the VirtualBox VM and Vagrant VM Manager
$ brew cask install virtualbox vagrant
# Homebrew to install Ansible provisioning for the VM
$ brew install ansible
```

For Linux systems, use your system's package manager, or some other means (see respective websites), to install [NodeJS/npm](https://nodejs.org/), [VirtualBox](https://www.virtualbox.org/wiki/Downloads), [Vagrant](https://vagrantup.com/), and [Ansible](https://www.ansible.com/).

First, we need to configure the generator and automated provisioning
``` shell
# Node Package Manager to install Yeoman Scaffolding tool
@host $ sudo npm install -g yo
# Ansible's Galaxy to download pre-defined provisioning roles
@host $ ansible-galaxy install -r provisioning/requirements.yml
# Host Machine Install of Yeoman Project Scaffolding Generator
@host $ sudo npm install -g generator-djangular-gift
# *Optional* Tool to manage VM with icon in system tray
# $ brew cask install vagrant-bar
=======
__DjangularJS__ is a full-stack framework based on [Django](https://www.djangoproject.com/) and [AngularJS](https://angularjs.org/) focused on programmer happiness and sustainable productivity. 

It aims to solve the common issues with connecting those frameworks, support daily development needs and help developers to use best practices.


__Design goals__:
 - [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
 - [Convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration)
 - Modularity
 - Automation (as much as possible!)
 
 

# Getting started

## Project structure

__DjangularJS__ comes with guidelines on how to organize your project. For example:
 - __Django__ (ie Back-end) stuffs are located in `<project-name>/server` folder 
 - __Angular__ (ie Front-end) stuffs are located in `<project-name>/public` folder
 - __Ansible__ (ie provisioning) stuffs are located in `<project-name>/provisioning` folder

The global structure is described below:

```
. (project root)
+-- provisioning/                 Ansible configuration (optional but recommended)
|
+-- public/                       AngularJS app (front-end)
|  +-- _/                         contains bower packages (see .bowerrc)
|  +-- core/                      main module (mandatory)
|  +-- i18n/                      contains translations for each language (optional)
|  +-- angular-module0/
|  |  +-- constants/              contains angular constants for module0 (optional)
|  |  +-- controllers/            contains angular controllers for module0 (optional)
|  |  +-- directives/             contains angular directives for module0 (optional)
|  |  +-- filters/                contains angular filters for module0 (optional)
|  |  +-- img/                    contains images used in module0 (optional)
|  |  +-- modals/                 contains modal views used in module0 (optional)
|  |  +-- services/               contains angular services for module0 (optional)
|  |  +-- styles/                 contains Sass' partials for both views and templates (optional)
|  |  +-- templates/              contains templates (ie partial views) for both directives and modals (optional)
|  |  +-- tests/                  contains module0's tests (optional but recommended)
|  |  |  +-- *.spec.js            unit test (karma + jasmine) (optional)
|  |  |  +-- *.e2e.js             protractor test (karma + jasmine) (optional)
|  |  |  +-- module0.fake-data.js special file use to provide data on for your unit tests (optional)
|  |  +-- views/                  contains views for module0 (optional)
|  |  +-- module0.module.js       configuration file for module0 (mandatory)
|  +-- ...
|  +-- config.js                  global configuration file for the AngularJS app (mandatory)
|  +-- config.scss                global configuration file and entry point for Sass (mandatory)
|
+-- requirements/                 python dependencies for both development and production (mandatory)
|
+-- server/                       Django project (back-end) (mandatory)
|  +-- core/                      main module (mandatory)
|  +-- django-module0
|  |  +-- fixtures/               contains initial/test data for module0 (optional)
|  |  +-- serializers/            contains module0's serialiazers (python module) (optional)
|  |  +-- templates/              contains module0's templates (optional)
|  |  +-- templatetags/           contains templatetags used in module0 (optional)
|  |  +-- tests/                  contains module0's tests (should match test_*.py) (optional but recommended)
|  |  +-- views/                  contains both APIViews and Viewsets (optional)
|  |  +-- urls.py                 lists module0's routes (optional)
|  +-- ...
|  +-- settings/                  special folder containing Django settings (mandatory)
|  +-- urls.py                    lists modules and third party routes (mandatory)
|
+-- package.json                  npm (ie NodeJS) dependencies (mandatory)
+-- bower.json                    front-end (ie bower) dependencies (mandatory)
+-- assets.json                   special file used to locate front-end dependencies (mandatory)
+-- gruntfile.js                  configuration file for Grunt (mandatory)
+-- Vagrantfile                   configuration file for Vagrant (optional but recommended)
```

## Conventions

 - __Instructions are to be run from the root directory of your project__
 
 - Instructions like `@host $ ...` should be executed from the host (ie. from your computer) 
 
 - Instructions like `@dev0 $ ...` should be executed from `dev0` (ie. inside vagrant, in the vm hosting your web app)
 
   Use `@host $ vagrant ssh dev0` to connect to `dev0`
   
   Development machines are listed in `provisioning/vagrant.yml` 
   
 - Instructions like `(vagrant)@dev0 $ ...` expect `virtualenv` to be activated.
  
   Use `@dev0 $ cd /vagrant && source bin/activate` to enable `virtualenv`

 
## Prerequisites & Dependencies

Make sure you have installed all of the following prerequisites on your __development__ machine:

 - __[Vagrant](http://docs.vagrantup.com/v2/installation/)__ - easy way to create and configure lightweight, reproducible, and portable development environments.
 
 - __[Ansible](http://docs.ansible.com/ansible/intro_installation.html)__ - tool to manage your servers
 
 - __[io.js](https://iojs.org/en/index.html)__ or __[node.js](https://nodejs.org/)__ (see also [nvm](https://github.com/creationix/nvm))
 
 - __[bower](http://bower.io/)__ - front-end dependencies manager
  
   `@host $ npm install -g bower`
   
 - __[grunt](http://gruntjs.com/)__, __[yeoman](http://yeoman.io/)__ and __[generator-djangularjs](https://github.com/nicolaspanel/generator-djangularjs)__ - automation tools
 
   `@host $ npm install -g grunt-cli yo generator-djangularjs`


__NOTE__: Even if __Vagrant__ and __Ansible__ are recommended, you can use __DjangularJS__ without them (it assumes you know what you are doing).


## Project Setup

```sh
@host $ mkdir <project_name> && cd <project_name>
@host $ yo djangularjs
>>>>>>> master
```

Let's generate the bare app scaffold files
``` shell
# Create the directory for your app and navigate inside
@host $ mkdir your_app && cd "$_"
# Run the yo generator, when prompted, confirm or set the app name
@host $ yo djangular-gift
```

If everything went well, start the VM.
``` bash
vagrant up
```

Vagrant will now start the virtual machine and begin provisioning it. You will likely be asked to enter your password after several minutes. This portion may take a long time on slower machines.

After the machine is started the first time, Ansible will run and ask you for the vault password, which is the same as the user login/pass (vagrant). Ansible will then install several package managers (nodejs, npm, bower, & pip) which we will use to install all of our application's dependencies. Once it is finished, you will be back at the command line prompt.

---

## Setting Up the VM

<<<<<<< HEAD
Now that the machine is operating, time to connect and configure. The next commands will connect you and take you to the folder inside the VM that is synced with the the project directory on your host machine.
``` bash
# Connect to the VM from your host machine through ssh as user dev0
=======
```sh
# 1. Setup your development environment  
@host $ sudo ansible-galaxy install -r provisioning/requirements.yml
@host $ vagrant up # take a while
>>>>>>> master
@host $ vagrant ssh dev0
# Change to the /vagrant directory (which is the synced repo folder)
@dev0 $ cd /vagrant
# Activate development environment
@dev0 $ source bin/activate
```

Next, install your server and client-side dependencies with npm and bower.
``` bash
# Install server-side dependencies on vm with npm
@dev0 $ npm install
# Install client-side dependencies on vm with bower
@dev0 $ bower install
```

Time to set up the PostgreSQL server. You will temporarily switch into the 'postgres' user mode, create the database and then enter into its shell.
``` bash
# Sudo as postgres user
@dev0 $ sudo -i -u postgres
# Create development database 'gift_dev' as postgres
@postgres $ createdb gift_dev
# Launch into the PostgreSQL shell
@postgres $ psql
```

Now you are inside the postgres shell. Lets create our apps credentials and grant it privileges.
``` sql
# Create new credentials
@ psql $ CREATE ROLE vagrant WITH LOGIN PASSWORD 'vagrant';
# Give new user 'vagrant' all priveleges on the development db
@ psql $ GRANT ALL PRIVILEGES ON DATABASE gift_dev TO vagrant;
# Change create of 'gift_dev' to 'vagrant'
@ psql $ ALTER USER vagrant CREATEDB;
# Quit the PostgreSQL shell and then exit out of postgres
@ psql $ \q
@ postgres $ exit
# You should now be back inside the ssh of your VM, as dev0
```

Now to install Python dependencies and migrate the initial models.
``` bash
# Use pip to read and d/l project module dependencies
@dev0 $ pip install -r requirements/dev.txt
# Migrate over the default models (auth, etc...)
@dev0 $ python manage.py migrate
```

If everything has worked, run testing, build css, and start the server.
``` bash
# Grunt task-runner performs automated testing with karma/protractor
@dev0 $ grunt test
# Convert sass to css
@dev0 $ grunt sass translate
# Compile static files and start the server
@dev0 $ grunt serve
```

That's it! You should (hopefully) be able to go to your [localhost (http://localhost:9000)](http://localhost:9000) on your browser to see the splash page.

You can exit the VM on the terminal by typing `exit`. To shut the VM down and free memory, exit the VM, and then while in the project directory, type either of the following.
``` bash
# Shuts down the VM (execute from host machine, in project directory)
@host $ vagrant halt
# Once you halt, suspend frees up system memory (use vagrant up to restart)
@host $ vagrant suspend
# After you halt and/or suspend the VM, you can free up space by removing it
@host $ vagrant destroy
```

---

## Yo Cheat-Sheet

**AngularJS**
```
yo djangular-gift:angular-controller NAME
yo djangular-gift:angular-directive NAME
yo djangular-gift:angular-filter NAME
yo djangular-gift:angular-modal NAME
yo djangular-gift:angular-module NAME
yo djangular-gift:angular-route NAME
yo djangular-gift:angular-service NAME
```

**Django**
```
yo djangular-gift:django-api-view NAME
yo djangular-gift:django-filter NAME
yo djangular-gift:django-module NAME
yo djangular-gift:django-serializer NAME
yo djangular-gift:django-templatetag NAME
yo djangular-gift:django-viewset NAME
```

---

## Stack Components
+ Virtual Machine: VirtualBox/Vagrant
+ Provisioning: Ansible
+ OS: Ubuntu/Trusty64
+ Backend:
    * NodeJS
    * Django
        * Django Rest Framework
        * Django Compressor
        * Django Rest Pandas
+ Frontend:
    * AngularJS
        * AngularUI
        * Angular-Translate
        * AngularMaterial
    * Bootstrap
    * Sass
    * Moment.js
+ Scaffolding/Automation/Testing:
    * Yeoman
    * Grunt
    * Karma
    * Protractor

---

## Digital Credits
[Based on the Full Stack DjangularJS Project](https://github.com/nicolaspanel/djangularjs) [and DjangularJS Yo Generator](https://www.npmjs.com/package/generator-djangularjs) by Nicolas Pane.

His excellent work I have only modified in small part in order to conform with [John Papa's AngularJS Style Guide.](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). I have also added provisioning for a postgres server as well as a few small project-driven needs.

---

## License
The MIT License (MIT)

<<<<<<< HEAD
Copyright (c) 2016 David J. Thomas, thePortus.com
=======
Copyright (c) 2015-2016 Nicolas Panel
>>>>>>> master

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
