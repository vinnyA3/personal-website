---
layout: ../../layouts/posts.astro
title: "A Hacktoberfest Composition: Redis and Docker"
pubDate: 2021-10-31
description: "A guest post that I got to write for Redis!"
author: "Vin Aceto"
---

> The following is a guest post that I got to write for Redis!  You can check
> out the original version [here](https://developer.redis.com/hacktoberfest/stories/vincent-aceto).
> Thanks for reading!

Hello!  My name's [Vincent Aceto](https://www.vincentaceto.com/) and I am a
Software Engineer based in New York City.  Throughout the week, you can find me
hacking away on mobile and TV applications over at Equinox Media.  On the
weekends, when I'm not getting lost somewhere on my skateboard, I'll be nose
deep in some open source or personal projects.

October is a special month for those who enjoy working on exciting software
projects.  In fact, there couldn’t be a more perfect month to get into software
exploration and contribution; it's collectively known as Hacktoberfest!
Hacktoberfest is a community-led effort to encourae open source contributing and
foster learning.  I am a huge advocate for open source, so getting involved in
Hacktoberfest is such a joy; if I have the chance to learn something new or
brush up on some skills, then definitely count me in.

Now, rewind the clock a bit, and you'd find me perusing Github's
Hacktoberfest-tagged issues.  I wanted to find the best first contribution for
the month's coding festivities.  While searching, I had one very important
criterion that the introductory issue needed to satisfy: to work with a
technology that I do not use on a daily basis.  I wanted to make sure that I
walked away with a newfound knowledge that would benefit my career.  After some
time, my eyes landed on a Redis Developer Community issue - I knew it
immediately, this was perfect!  The checkbox was ticked, for I do not regularly
work with Redis.  I was now ready to kick off the Hacktoberfest celebration.

The project I worked on is entitled [Introducing The Geosearch
Command](https://github.com/redis-developer/introducing-the-geosearch-command).
The goal of the project is to demonstrate the use of the GEOSEARCH command,
which was added to Redis in the recent 6.2 release.  Working as a software
engineer, you are almost always going to be working with some cached data and,
more often than not, it's Redis that is sitting nicely somewhere in that cache
layer.  That said, my first-hand experience (at the time) with the caching
technology resonated somewhere between “landing page” and “getting started”.
The project had turned out to be developer sale, a two-for-one: I would get to
learn more about the Redis technology, how to set up an instance, familiarize
myself with the API, and I would get the opportunity to work with Docker - which
I'm not regularly hacking with during my day-to-day.

Now, onto the
[issue](https://github.com/redis-developer/introducing-the-geosearch-command/issues/5).
The issue's aim was to extend an existing Docker Compose integration.  The
`docker-compose.yml` file was to include a schema, which was to run the
repository's Python Flask application in a Docker container.  Additionally, the
main application was to connect to the project's existing Redis container - this
Redis build step was already included in the Docker Compose file.  With the
features and constraints clearly defined, the next step was to pull out the
documentation.  To make sure I was familiar with the tech at hand, and to ensure
I got the most out of working on the issue, I started with the Redis
installation docs - becoming aware that things like the default Redis port
`6379` would come to serve me well when debugging.  After installation, I took
some time to explore the Redis API and read about Redis' internal hash
implementation at a high level.  The final reconnaissance was to review Docker.
I had briefly used Docker at a previous position, and have worked on some
personal projects using the container technology; however, a quick Dockerfile
and `docker-compose.yml` refresher was necessary.

With the pre-work done, it was time to start the Flask application's Docker
Compose implementation.  Here is a step-by-step guide, expressed in the present
tense, to the process:

First, let's start with the Docker Compose `YAML` file:
<img
  src="/images/screenshot-1.png"
  alt="original repository docker compose file"
/>

As you can see, we have some Redis provisioning steps.  We assign a name to the
container, define the version of Redis we wish to spin up, and the port mapping
(`6379:6379` states we'd like to expose port `6379` from inside the container to
a port on your local machine).

Now, let's start with composing the project's application.  Unlike the Redis
container, which uses an official Docker image to build from, we don't have a
blueprint to scaffold the project's application.  This blueprint, or schema, is
called a Dockerfile.  A Dockerfile lists steps on how to build our image.  It's
this very image that tells Docker's engine how to build the container.  Let's
create a Dockerfile, which will assemble the application image for us:
<img
  src="/images/screenshot-2.png"
  alt="working Dockerfile"
/>


In short, this file serves as the foundation for the construction of the
project's application environment.  Additionally, the file tells Docker which
files we want to include in our container, how to install the contained app's
dependencies and what command should be used to run the app. Most of the file's
instructions are better explained in the [official
documentation](https://docs.docker.com/engine/reference/builder/), so please
take a look there if you're curious as to what the file's instructions have to
offer.

Great, before we move on to the compose file, let's make sure we test that
Docker is able to build and run the container from our image.

Let's build the image:
<img
  src="/images/screenshot-3.png"
  alt="docker build output"
/>


Get our newly created image's hash identifier by listing our local images:
<img
  src="/images/screenshot-4.png"
  alt="docker images list output"
/>


Now let’s run the container using the image id, while making sure we bind a port
on our machine to the exposed port defined in the Dockerfile:
<img
  src="/images/screenshot-5.png"
  alt="docker run output"
/>


Great!  The logs indicate the container is running.  Let's ensure our port
mapping is working.  A quick `cURL` command verifies that we can talk to the
application:
<img
  src="/images/screenshot-6.png"
  alt="successful curl html output text"
/>


With the Flask application Docker-fiedTM, let's compose it with Redis!
<img
  src="/images/screenshot-7.png"
  alt="full working docker compose file"
/>


Let us quickly dissect what was added to the `docker-compose.yml`:

* Define a service for the application (namespaced under 'app')
* Define a name for the container
* Set a build context/entry point (this is the relative location for our service's Dockerfile)
* Map the service's port to the host machine
* Ensure that Redis is initialized before the Flask app starts (since the Flask application requires a Redis connection on `init`)
* Define the necessary environment variables.

With the scaffolding in order, it's now time to run both the Flask application
and Redis with Docker Compose.  To do so, we'll run the command `docker-compose
up`:
<img
  src="/images/screenshot-8.png"
  alt="docker compose up build output"
/>


Finally, let's navigate to `localhost:5000` in our browser to see the
application in action:
<img
  src="/images/screenshot-9.png"
  alt="geosearch application running in browser"
/>


Excellent, the Flask application is running and is composed with the
pre-existing Redis integration!

Now, before I conclude, I'd be remiss if I said that things worked as smoothly
as portrayed; however, we welcome such hiccups and challenges.  The main problem
I faced was an empty response from the contained application server.  What could
be the issue?  The Dockerfile, for the Flask app, is working.  The compose file
seemingly provisions our services successfully.  What could be the problem here?
Welp, turns out I forgot a very important factoid: Docker Compose will set up a
single default network, one of which will house the services defined in the yaml
file.  Containers and their services can communicate within this network, but
what about our browser - which is not on that Docker network?

To resolve this issue, we need to tell our contained application server that it
should listen on all networks, not just localhost; which, in the context of our
running Docker network, is local only to that micro-network, if you will.  To
tell the Flask server to listen on all accessible networks, we can define our
host in the Dockerfile's `CMD` command:
<img
  src="/images/screenshot-10.png"
  alt="Dockerfile with flask cmd and host ip solution"
/>


All good!

Working through this issue, I definitely picked up some newfound Redis
knowledge!  While not 100% necessary for the task at hand, starting with the
official documentation and exploring the API provided me with the confidence
needed to tackle this issue.  Additionally, the project allowed me to solidify
some pre-existing Docker knowledge; and, very politely, pointed out which
knowledge gaps needed to be filled.

Working through this Hacktoberfest-inspired issue was very rewarding, and I can
say that I have walked away a better developer.  Not only was I exposed to more
technology, and got to flex some problem-solving muscles, but my passion for
open-source software collaboration has grown evermore.

Thank you for reading!  I hope my story inspires you to start with (or continue)
working with open source.

---

You can find Vincent online at [his website](https://www.vincentaceto.com/) and
at [LinkedIn](https://www.linkedin.com/in/vinaceto).
