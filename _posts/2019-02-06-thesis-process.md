---
layout: post
title: "Undergrad Thesis: Interfaces For Online Learning"
author: "Andy"
categories: thesis
excerpt: Interfaces For Learning was a year long research project investigating the ways we learn online. There is an abundance of online resources for learning these days, but they sometime blur the line between education and entertainment. In this study, I surveyed existing literature on personal knowledge bases, information storage, and learning theory; interviewed potential users and experts on the subject; created numerous prototypes, both physical and digital; and collaborated directly with Alcamy.org, an online learning platform founded in 2016, to improve their system based on my research insights and experiments.
hidden: true
---

During the initial research phase of this project, I wrote an essay about linked memory-retrieval systems, both cognitive and machine-based, that help enhance pragmatic learning. Read it [here.]({% post_url 2017-10-17-literature-review-thesis %})
<br>
<br>
<!-- ![](/assets/thesis/splash.png) -->
<br>
<br>


1. [Introduction](#introduction)
2. [Existing Examples of "Learning Interfaces"](#examples)
3. [Prototype](#prototype)
4. [Learnings](#learnings)
<br>
<br>
<br>

<br>
<br>
<br>
<br>
<a name="introduction"></a>
###### 01
### <center> Introduction </center>
<center> {% include linebreak.html %} </center>
<br>
<br>

<video width="100%" autoplay loop>
  <source src="images/thesis/ytvids.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


We’ve all been entertained by these videos; super clean, super simple, super *delicious*, and easy to follow. And after we finish it, we have a tendency to click on another, and another, and another. Youtube rabbit holes are an easy thing to go down, and even though educational content is abundant online, it’s usually in the form of entertainment like this. We never call Youtube rabbit holes educational.

But that’s okay, because if i wanted to learn about African animals except elephants I will find exactly what I need—
<video width="100%" autoplay loop>
  <source src="images/thesis/elephants.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>




It’s easy to find something online that teaches you something, but rarely is it shown through an educational lens. And that’s because an educational lens is a classroom, a teacher, other students, and the surrounding environment.

{% include image.html path="thesis/medium.jpeg" path-detail="thesis/medium.jpeg" alt="Chalk intro" %}
<!-- ![](thesis/medium.jpeg) -->
<small> *Medium telling me what else I might like in the footer of the website. None of these are related to what I just read.* </small>

And the internet isn’t that. It’s not any of those, Its a lot of “up next’s” and “suggested readings,” not based on what I’m currently doing, but based on my entire browsing history. So it needs to be up to the learner to mediate those resources online. In an age of abundant online educational media, it is important that we are able to treat these self-learning resources as something that we can shape and direct, rather than something that tells us to consume more of what it thinks we like.

For the past year I have been trying to answer the question:
<br>
<br>
## How can we assist learners in navigating through online resources effectively?
<br>
<br>
Through interviews with teachers, public speakers, students, academics, and hobbyists, I categorized my understanding of learning into three main questions:

1. How do we effectively find and accept quality content from online resources in a sea of junk?
2. How do we organize it in a way that makes sense to us?
3. and how can we discuss this with others to deepen our understanding of it?

<br>
<br>
{% include image.html path="thesis/model.png" path-detail="thesis/model.png" alt="Chalk intro" %}
<!-- ![](thesis/model.png) -->
<Br>
and they all flow together as the process of learning happens.
This became the fundamental model for what learning should include during my investigation on this subject.

I researched existing examples of interfaces that have these categories, but found they tend to prioritize one, and struggle to navigate between each other.

Lets take a look at what interfaces do and don’t do well.
<br>
<br>
<br>
<br>
<a name="examples"></a>
###### 02
### <center> Existing learning interfaces </center>
<center> {% include linebreak.html %} </center>
<br>
<br>
{% include image.html path="thesis/laptopyt.png" path-detail="thesis/laptopyt.png" alt="Chalk intro" %}
<!-- ![](thesis/laptopyt.png) -->

Youtube is a great example of how an interface that has so much content for learning, isn't presented in a way to support it. If I go to a video to learn about something, but I’m looking for ONLY the part I care about, I have to click through the entire video to find it. There are thumbnail previews, but that’s only a visual cue, so auditory explanations are not benefitted from that. If I want to discuss this with others, I have to leave the video and scroll down to the comments. If a comment is time stamped, I click and leave the comments to see the part of the video they were talking about, only to have to scroll back down to see the discussion around the snippet of video.


On a slightly different note, Google has an uncommon feature when searching some questions into it

{% include image.html path="thesis/whistle.jpeg" path-detail="thesis/whistle.jpeg" alt="Chalk intro" %}
<!-- ![](thesis/whistle.jpeg) -->

where it gives you a [suggested clip](http://lmgtfy.com/?q=how+to+whistle). Google will highlight specific parts of a video and tell you which moments in the video it believes are most relevant to you.


Another is [IBM Watson’s TED website](http://watson.ted.com/). Here, you can ask IBM’s Watson a question or topic and it will search every TED Talk for videos that it thinks are related to your inquiry. Just like the Google search, it clips the part of the video that is relevant to you, and starts the video from there, as you can see from the teal bar below the video. But this interface as well as Google’s suggested clip still just surfaces content for consumption, and neglects the other essential parts of a learning environment that people need.

<video width="100%" autoplay loop>
  <source src="images/thesis/2by2.mp4" type="video/mp4">
</video>

digging deeper, I looked to different types of learning platforms to see how they dealt with this problem. It all varied based on what information you are looking for, and how deeply you want to understand it.


Resources like Youtube, Reddit and Quora have a wide breath of content, that is both academic and interest heavy, but are focused, based on their interfaces, on entertaining or consuming.

Resources that are educational and academic employ a classroom like setting, or a sequential learning style, with an emphasis on knowledge quality.

These two quadrants together have quality learning material, but because of the interface itself, we as learners aren’t empowered to retain this information through note taking or discussion.

As for the other spaces, theres not many examples. But these are the two spaces that I see the most promise in, specifically, educational interest based learning.

> ## What does an interface for learning look like?



Researching possible companies in that upper right region, I partnered with a company called Alcamy, who were working on a similar problem. Alcamy is a self learning platform that curates existing learning materials online so you can find helpful learning resources all in one place.
<br>
<br>
<br>
{% include image.html path="thesis/laptopalcamy.png" path-detail="thesis/laptopalcamy.png" alt="Chalk intro" %}
<!-- ![](thesis/laptopalcamy.png) -->
<br>

Their current website, which you can visit now, uses user created categories that filter entire topics into a streamlined curriculum. Together we worked to re-create their existing interface for one that promoted more than just consumption, so that if someone wanted to learn more about bitcoin, for example, they would find value in Alcamy whether they knew a lot or not much at all.
<br>
<br>

{% include image.html path="thesis/albert.png" path-detail="thesis/albert.png" alt="Chalk intro" %}
<!-- ![](thesis/albert.png) -->
Meet Albert, an avid bitcoin purchaser, he knows a lot about the basics, and he’s trying to learn about unstable currencies for his next crypto purchase.

<br>
{% include image.html path="thesis/ridic.png" path-detail="thesis/ridic.png" alt="Chalk intro" %}
<!-- ![](thesis/ridic.png) -->
He’s really frustrated with his current attempts to learn about it on youtube and reddit, as he keeps getting video suggestions that steer him away from his topic through exaggerated titles and ostentatious thumbnails, and the lack of quality discussion in the comments prevents Albert from really diving deep into his topic.

<video width="100%" autoplay loop>
  <source src="images/thesis/intro.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<br>
<br>
<br>
<br>
<a name="prototype"></a>
###### 03
### <center> Prototype </center>
<center> {% include linebreak.html %} </center>
<br>
<br>

On Alcamy, he finds the topic he’s looking for, and see’s Unstable Currency is already a discussion category. He is able to skip the sections about bitcoin he already knows and can immediately access Unstable Currencies

<video width="100%" autoplay loop>
  <source src="images/thesis/3sections.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

In the new interface, Albert has some additional tools to help him grasp this concept. and there are three columns to accompany Albert’s learning journey

A place for note taking, where he can write down his thoughts, drag quotes and snippets, and have a place for him to help solidify his learning.

Second, a space for the actual content he’s learning from, and I will talk more later about navigating through it,

And lastly, a place for discussion with communities interested in the same topic.

While watching the video, Albert has questions.

<video width="100%" autoplay loop>
  <source src="images/thesis/comments.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

He writes a quick conversation starter, drags it over to the discussion section, and In no time, he get’s a clarifying response from someone else interested in learning about the same topic as him.

With the three part interface, Albert doesn’t have to keep scrolling between commentary and video like youtube and can focus on his learning over navigating. Which is critical during points when you are just starting out, as there is so much more to take in.
{% include image.html path="thesis/jane.png" path-detail="thesis/jane.png" alt="Chalk intro" %}
<!-- ![](thesis/jane.png) -->

So, like Jane, who knows nothing about bitcoin, she’s curious what all the buzz is about, and is looking to learn more. She’s found some great information watching TED talks, but is looking for a place to help her unscramble her thoughts.

<video width="100%" autoplay loop>
  <source src="images/thesis/janecomment.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

She starts from a beginner topic, and picks up the basics quickly. She’s can choose different ways to digest the content based on her preference. Jane jots down some notes and drags her comments to the notes section. Now, she’s interested in a certain part of the video, and grabs the scrub bar to refine the discussion a bit more.

<video width="100%" autoplay loop>
  <source src="images/thesis/msdetail.mp4" type="video/mp4">
</video>

The media scrubber, located directly on the video timeline allows Jane the ability to look at discussion and commentary from both the macro and micro level.

<video width="100%" autoplay loop>
  <source src="images/thesis/mscontext.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

So when Jane alters the scrubbers size and location, it filters the comments to just that part of the video rather than the video as a whole, allowing for more directed discussions that the long comment threads we’re used to don’t offer.



<video width="100%" autoplay loop>
  <source src="images/thesis/scrubberuse.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


She scrubs to a specific section to see what the discussion is about for that part of the video, only to find that someone asked her question! The response links her to another page, and she finds the exact quote that the commenter was referencing. she is able to copy the highlighted section directly to her notes.

<br>
<br>
<br>
<br>
<a name="learnings"></a>
###### 04
### <center> Final thoughts </center>
<center> {% include linebreak.html %} </center>
<br>
<br>

{% include image.html path="thesis/modelonui.jpeg" path-detail="thesis/modelonui.jpeg" alt="Chalk intro" %}
<!-- ![](thesis/modelonui.jpeg) -->

My work on learning interfaces aims to empower people to create meaningful relationships with their knowledge to support a mind of deep interest and curiosity, so that even the biggest problems can be deconstructed and understood. Looking at what defines an interface that helps someone learn is my step toward that. These two scenarios were looking at learning from a digital interface, but it stems far beyond just the digital.
<br>
<br>
I would like to bring my learnings from my work here with me in my future work, as I look at making technology not something that alleviates us in the moment, but supports us over time as we grow and develop ways to make education better.
<br>
<br>
Thank you.
<br>
<br>
<br>
