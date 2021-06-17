---
author: dan
categories: null
# date: '2013-07-30'
published: false
tags: null
title: Install Python and Pygments on Windows
url: /2013/07/30/install-python-and-pygments-on-windows
---


Recently I have started using [Jekyll][1].  Some of the Jekyll frameworks like Octopress and others use [Pygments][2] which is a mature and widely used syntax highlighter built on [Python][3].

I use both a Windows machine and an OSX machine to develop with so I was happy that everything seemed to work "out of the box" on OSX  but Windows was different story.
<!--more-->

> **PROTIP:** 
> If Jekyll is giving you an error about /bin/sh on Windows 
> set `pygments: false` in the `_config.yml` file to at 
> least get it to run and build your site. 

I am not experienced with Python and this is my first time installing it on Windows. That said, here are the steps I used to install Python and Pygments. This is officially the first Python egg I’ve ever hatched.

What the heck is an egg? Eggs are one way to package up a group of Python scripts for easy distribution. This makes eggs the equivelant of Ruby gems or Node npm packages.

### Steps
1. Install [Python][3].
2. Add Python to your Windows path.  Based on the version I installed: `C:\Python33` and you should also add `C:\Python33\Scripts` while you are at it so you can leverage easy_install.
	*Control Panel > System > Advanced System Settings > Advanced Tab > Environment Variables...*
3. To create or install eggs on Windows you need to have easy_install installed.  Just download the `ez_setup.py` script straight from [here][4] (right click and "save link as...") and run it.  Quote from [setuptools][5]:
	> "The recommended way to install setuptools on Windows is to
	> download ez_setup.py and run it. The script will download the
	> appropriate .egg file and install it for you."
{% highlight text %}
python ez_setup.py
{% endhighlight %}
4. Then install the Pygments with easy_install.
{% highlight text %}
easy_install Pygments
{% endhighlight %}
5. This will put `pygmentize.exe` and a `pygmentize-script.py` script in your default Python scripts folder (C:\Python33\Scripts).

And that’s it!  I flipped `pygments: true` in the Jekyll `_config.yml` file and it works!

_More information on EasyInstall and Python Eggs [here][6] and [here][7]._

[1]: http://jekyllrb.com/
[2]: http://pygments.org/
[3]: http://www.python.org/getit/
[4]: https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py
[5]: https://pypi.python.org/pypi/setuptools
[6]: http://en.wikipedia.org/wiki/Python_eggs
[7]: http://www.blog.pythonlibrary.org/2012/07/12/python-101-easy_install-or-how-to-create-eggs/