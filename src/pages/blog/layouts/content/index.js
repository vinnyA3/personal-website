import React, { useEffect } from "react"
import { Link } from "gatsby"
import DarkModeSwitch from "@components/darkmode-switch"
import VincentProfile from "@assets/images/vincent-profile.jpeg"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import "./styles.scss"

deckDeckGoHighlightElement()

// TODO: remove this immediately
const htmlData = `
<h2>What Are Dotfiles?</h2>
<p>Dotfiles are configuration files that are used to customize and personalize your system. For all you history buffs, the dotfiles name comes from the UNIX convention of prefixing config files with a dot.  You can check out some dotfiles on your machine by opening up terminal, navigating to your home directory, and listing all dir contents:</p>
<pre><code>cd ~ &#x26;&#x26; ls -la
</code></pre>
<br />
<p>Some typical dots include: <code>.bash_profile</code>, <code>.bashrc</code>, and <code>.lesshst</code>.  <code>.bashrc</code>, in particular, is a script used to initialize and configure an interactive bash shell session. Many programs that you use, in your day-to-day development / nix life, can be configured with specific dotfiles.  Git, for example, utilizes a <code>.gitconfig</code> file that allows you set preferences such as your user email, handle, and default editor.</p>
<h2>Saving and Sharing Dotfiles with Git</h2>
<p>
  Tweaking dotfiles can be very time consuming (please don't let this deter you ... honestly, there's a joy in customizing your environments to your liking).  It would be a real shame if your hard drive were to crap out one day, and you lose all those precious config files!
</p>
<p>Well, fear not. Git to the rescue!  Of course, you can always archive and save your
files to a portable drive, but if you're familiar with git, saving + sharing
your dotfiles is quick and easy. </p>
<p>To do this, make sure you:</p>
<ol>
<li>Have a github account</li>
<li>Set up SSH -- not a hard requirement, but it helps with security</li>
<li>Create a dotfiles repository </li>
</ol>
<p>When you're ready: <code>git add &#x26;&#x26; git commit &#x26;&#x26; git push</code></p>
<p>You can now rest assured that your files are safe and sound!</p>
<p>In the event that you get a new machine, whether that be for work or personal use, all
you need to do is pull down your dotfiles repo and take the day off.</p>
<h2>Conclusion</h2>
<p>Dotfiles are configuration files for your environment.  Modifying these files to
your liking takes time, so make sure that you back up them somewhere.  If you're
tech savvy, Git version control is perfect for saving your
dots--quickly share and sync your configs across multiple devices.</p>
<p>I hope you're ready to start managing and configuring your dots!  For some
inspiration and more dotfile related information, check out my personal files on GitHub: <a href="https://github.com/vinnyA3/dotfiles">https://github.com/vinnyA3/dotfiles</a></p>
<h2>Resources</h2>
<ul>
<li>Get started with your own dotfiles: <a href="https://medium.com/@webprolific/getting-started-with-dotfiles-43c3602fd789">https://medium.com/@webprolific/getting-started-with-dotfiles-43c3602fd789</a></li>
</ul>`

// TODO: re-implement this
// <div
//   id="toc"
//   className="blog-content_toc"
//   style={{ position: "fixed", left: "3em", top: "50%" }}
//   dangerouslySetInnerHTML={{ __html: postData.tableOfContents }}
// />

const ContentWrapper = props => {
  // const { postData } = props

  // useEffect(() => {
  //   const mediaString = "(max-width: 1290px)"
  //   const mql = window.matchMedia(mediaString)
  //   const tocEl = document.getElementById("toc")

  //   const handleChange = e => {
  //     if (e.matches) {
  //       tocEl.style.display = "none"
  //     } else {
  //       tocEl.style.display = "block"
  //     }
  //   }

  //   mql.addListener(handleChange)

  //   return () => mql.removeListener(handleChange)
  // }, [])

  return (
    <div className="blog-layout">
      <nav className="blog-navigation">
        <div className="content-wrapper">
          <div className="sub-navigation">
            <div className="sub-navigation__brand">
              <Link to="/">
                <h3>Vincent Aceto</h3>
              </Link>
            </div>

            <ul className="sub-navigation__controls">
              <li>
                <DarkModeSwitch />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`blog-content`}>
        <section className="blog-content__hero">
          <h1>Getting Started with Dotfiles</h1>
        </section>

        <main
          className="blog-content__main"
          dangerouslySetInnerHTML={{ __html: htmlData }}
        />
      </div>

      <footer className="blog-footer">
        <div className="blog-footer__top-bar" />
        <div className="content-wrapper u-flex-center">
          <div className="blog-footer__media">
            <div>
              <img
                className="blog-footer__avatar"
                src={VincentProfile}
                alt="Vincent Aceto. That's me!!"
              />
            </div>
            <h3 className="blog-footer__title">Vincent Aceto</h3>
            <ul className="blog-footer__nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContentWrapper
