---
categories: WSL WSL1 Linux
tags: wsl curl apt git zsh npm pure oh-my-zsh debian
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
---
> In order to install Windows Subsystems for Linux(a.k.a WSL), you first need to check the "Windows Subsystem for Linux" option in Windows Features:

![Windows Features](/assets/images/posts/2020-06-25/01.png)

> After that your pc or laptop needs to restart.

> Next, Open the Microsoft Store then type "WSL", you will see a list of apps. In this post, I will use Debian(I personally like Debian over Ubuntu or CentOS), so download debian and install it:

![Microsoft Store](/assets/images/posts/2020-06-25/02.png)

> After installed the Debian WSL, you first need to launch the debian app

![Microsoft Store](/assets/images/posts/2020-06-25/03.png)

> then you will see the command line interface (CLI)

![Microsoft Store](/assets/images/posts/2020-06-25/04.png)

> I know it's not user friendly and mehh interface by default debian WSL theme.
> Thus, I'd like to introduce several packages for "enhancing" the debian WSL default setting below :
>> 1. zsh
>> 2. curl
>> 3. git
>> 4. npm
>> 5. oh my zsh
>> 6. powerline font
>> 7. zsh theme (agnoster, pure, powerlevel10k, etc..)
>> 8. zsh plugins (auto suggestions, syntax highlighting, etc..)

> 1. zsh  
> I highly recommend to use zsh in Debian Linux. It's super convenient and more useful than traditional bash shell.

<!--- Author: Myungsik Kim -->