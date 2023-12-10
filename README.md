# goodReads

## Goal
<p>We will organize a series of Django project workshop in Singapore under the Pyladies, and for these workshop we will have 4-5 workshops monthly to work on a mini project, to build a web application that reader can gather interesting music and store in this web and share with friends as well.</p>

Django MVT (link of this)

####  techstack you will learn
- Backend 
  - Django 
  - DRF (Restful API)
  - Database MySQL 
  - CICD 

- Frontend 
  - Reactjs
  - Jinja Templating, HTML, CSS (optional)

<i>This workshop will cover data modeling, routing, DRF, serizaltion, jinja templating, javascript and what the good practice for the logging and error handling. </i>


#### Setup
1. ###### Develop env setup 
```bash
pip install virtualenv
python -m venv django_workshop
# on mac 
source django_workshop/bin/activate
# on windiows
.\django_workshop\Script\Activate.ps1

# u can type below command to check if your virtual env works
pip list  
# deactive the virtual env
deactivate

pip freeze >requirements.txt
# install the whole package that I have installed during the development
pip install -r requirements.txt
```

2. ###### Django setup 
```bash 
# install the required packages for the django
python -m pip install Django 
# or 
pip install django
pip install djangorestframework
# createapp 
django-admin startproject goodreads .
check the app default page 
python manage.py runserver
cd goodreads/

`git init`
`git status`
`touch .gitignore `
# .django_workshop/ 

# create app 
python manage.py startapp goodreadsApp

# setup settings.py 
# to add the above created app into the settings.py in INSTALLED_APPS
'goodreadsApp.apps.GoodreadsappConfig', 
`rest_framework`

# then we can start build the models, serializer, views and urls
`python manage.py makemigrations goodreads`
`python manage.py migrate`

# make this data model visible in admin page 
`python manage.py createsuperuser --username admin --email <your email>`
```
<p> then u will see below in ur shell.(see below screenshot)</p>
... 


#### Continue build? 
all good? then we will continue build data model, views and serializers and urls. but before we build on server side, lets we set up reactjs as client first. 

#### Reactjs setup 
```bash 

```



###### workshop 2 (share on Jan)
2. Component (fetch to music api)
new feature: share button 
django test 

###### workshop 3 (share on Feb)
3. user SSO login (for more features)

###### workshop 4 (share on March)
4. deployment: CICD

###### workshop 5 (share on April)
5. what's next?
how to write better reactjs code