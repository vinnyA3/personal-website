---
title: "Getting Started with Dotfiles"
date: "2020-12-03"
---

## What Are Dotfiles? 

Dotfiles are configuration files that are used to customize and personalize your system. For all you history buffs, the dotfiles name comes from the UNIX convention of prefixing config files with a dot.  You can checkout some of the dotfiles by opening up terminal, navigate to your home directory, and listing all contents:

```
cd ~ && ls -la
```
<br />

Some typical dots include: `.bash_profile`, `.bashrc`, and `.lesshst`.  `.bashrc`, in particular, is a script used to initialize and configure an interactive bash shell session. Many programs that you use, in your day-to-day development / nix life, can be configured with specific dotfiles.  Git, for example, utilizes a `.gitconfig` file that allows you set preferences such as your user email, handle, and default editor.

## Saving and Sharing Dotfiles with Git
<p>
  Tweaking dotfiles can be very time consuming (please don't let this deter you ... honestly, there's a joy in customizing your environments to your liking).  It would be a real shame if your hard-drive were to crap out one day, and you lose all those precious config files!
</p>

Well, fear not. Git to the rescue!  Of course, you can always archive and save your
files to a portable drive, but if you're familiar with git, saving + sharing
your dotfiles quick and easy. 

To do this, make sure you:

  1. Have a github account
  1. Set up SSH -- because we're SMRT
  * Create a dotfiles repository 


When you're ready: `git add && git commit && git push`

You can now rest assured that your files are safe and sound!

In the event that you get a new machine, whether that be for work or personal use, all
you need to do is pull down your dotfiles repo and take the day off.

## Conclusion

Dotfiles are configuration files for your environment.  Modifying these files to
your liking takes time, so make sure that you back them somewhere.  If you're
tech savvy, Git version control is perfect for saving your
dots--quickly share and sync your configs across multiple devices.

I hope you're ready to start managing and configuring your dots!  For some
inspiration and more dotfile related information, check out my personal files on GitHub: https://github.com/vinnyA3/dotfiles


## Resources

* Get started with your own dotfiles: https://medium.com/@webprolific/getting-started-with-dotfiles-43c3602fd789
