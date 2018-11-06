<template>
    <article class="article">
      <div class="text-content">
        <h1 class="main-heading main-heading-work">The New Harmony</h1>
        <h2 class="subheading subheading-work">Website design for Harmonie tánc Dance Studio</h2>

        <ul class="text side side-text">
          <li><strong>Client: </strong>Harmonie tánc Dance Studio</li>
          <li><strong>Project: </strong>UX, UI design and web development</li>
          <li><strong>Project URL: </strong>http://www.harmonietanc.hu</li>
          <li><strong>Project date: </strong>2018</li>
          <li><strong>Team member: </strong>Daniel Tasko</li>
          <li><strong>My role: </strong>UI design, front-end development</li>
        </ul>

        <p>
          Harmonie tánc is a Budapest based dance studio focusing on art jazz and contemporary dance technics. Founder and lead teacher Ildikó Szabó (a.k.a. Ditta)  is passionate about dance and teaching people. She provides various lessons mostly for amateur dancers and beginners. In her classes, there is never more than 3-5 person to pay attention to everyone equally.
        </p>

        <h3 class="heading-text">Overview</h3>

        <p>
          Ditta contacted me in May 2018, because she wasn't satisfied with her current website.
          We have worked on former projects together so we could draw up the project's goals quite quickly: creating a clean interface, where users can obtain information about the classes easily. The new website must also represent the warm and friendly community behind the studio, and Ditta's kind, easy going personality.
        </p>

        <h3 class="heading-text">Discovery</h3>
        <h4>Interviews</h4>
        <p class="text">
          We started asking dancers a couple of questions about the studio's former website. These interviews  led us to the conclusions that 73% of the dancers visit the site only to check the timetable or browsing in course descriptions. Most of them described the process of finding a particular class in the timetable challenging.
        </p>

        <p>
          We also interviewed Ditta. The fundamental insight of this interview was to know her approach to the course structure. She always adopts the selection of the course types and the schedule of the lessons to the student's actual needs. Therefore changes happen frequently in the timetable or in course descriptions.
          It was also valuable information that most of the new students asked for her advice via email before applying on any of the courses.
        </p>

        <h4 class="subheading-text">Visual research</h4>
        <p>
          First, we were looking for several examples of similar dance studios' visual appearance.  Based on Ditta's personality and aims, the interior design of the dance studio, and the contemporary dance scene itself, we created a mood board.
        </p>
      </div>

      <div class="image image-article">
        <img src="src/assets/harmoniecs/hcs-0.jpg" alt="mood board">
      </div>

      <div class="text-content">
        <h3 class="heading-text">Redesign proposals</h3>
        <p>
          From the research, we pointed at three different parts of the product we required to find better alternatives.
        </p>

        <h4 class="subheading-text">1. Informative Home screen</h4>
        <p>
          The Home screen of the old website containing only a single hero image was practically empty. We imagined placing a short introduction to inform the users, where they are, and what kind of content they will find here.
        </p>

        <div class="image image-article-inner">
          <img src="src/assets/harmoniecs/hcs-1.jpg" alt="wireframe of the home page">
        </div>

        <h4 class="subheading-text">2. Rethinking the timetable</h4>

        <p>
          Reordering the timetable was the principal feature we wanted to put in the new website. We decided to think in blocks instead of lists or tables because the users can see the dates along with the class descriptions they connected.
        </p>

        <div class="image image-article-inner">
          <img src="src/assets/harmoniecs/hcs-2.jpg" alt="redesign of the timetable">
        </div>

        <h4 class="subheading-text">3. Using video content more efficiently</h4>
        <p>
          Harmonie tánc has valuable video content, which was under-represented on the old website. Focusing on the video content seemed to be the perfect solution for giving an insight into the atmosphere of the studio's dance lessons.
        </p>

        <h3 class="heading-text">Interface Design</h3>
        <h4>Content first</h4>
        <p>
          Although it was a redesign process, we had found it crucial to rethink the existing content before we started to design the new interface.
          During the copywriting process, we were in continuous connection with Ditta. We all considered it essential the texts should represent the friendly atmosphere of the lessons and Ditta's gentle approach to her students. After several iterations, we found the content valuable enough to drive the design and then the development process.
        </p>

        <h4 class="subheading-text">Structure and wireframing</h4>
        <p>
          Applying the card sorting technique, we started the layout design by reordering the content structure of the old website including the sections and the menu. It was the most post-it consuming part of the whole design process.
        </p>

        <h4 class="subheading-text">The first layouts</h4>
        <p>
          Since the website mainly targeted women, Ditta's vision was a light and soft appearance. In her everyday life, she prefers black and grey tones and mostly avoids colours, so we all agreed, a minimal, almost-monochrome layout will suit her character well.
          According to learnings we had, we created two versions of the layout.
        </p>
      </div>

      <div class="image image-article">
        <img src="src/assets/harmoniecs/hcs-3.jpg" alt="the first layouts">
      </div>

      <div class="text-content">
        <h4 class="subheading-text">Refining the UI</h4>

        <p>
          During the design process, we made numerous changes of the typography and the appearance of the website to reach the desired lightweight an feminine look.
        </p>
      </div>

      <div class="image image-article">
        <img src="src/assets/harmoniecs/hcs-4.jpg" alt="detailed UI screens">
      </div>

      <div class="text-content">
        <div class="image image-article-inner">
          <img src="src/assets/harmoniecs/hcs-colors.svg" alt="used colors">
        </div>

        <h4 class="subheading-text">Logo</h4>

        <p>
          Two keywords drove us while creating the website's logo: harmony and movement. First, we created three different versions for Ditta to get feedback, then after some changes, we got the final version.
        </p>

        <div class="image image-article-inner">
          <img src="src/assets/harmoniecs/hcs-logo.svg" alt="logo">
        </div>

        <h4 class="subheading-text">Illustration</h4>

        <p>
          With the shapes formed by thin lines between the page sections, we aspired to stimulate the users for scrolling to the upcoming section. They also represent the movement of contemporary dancers.
        </p>

        <div class="image image-article-inner">
          <img src="src/assets/harmoniecs/hcs-illustration.svg" alt="illustration">
        </div>

        <h3 class="heading-text">A Few Technical Details</h3>
        <h4>Using Vue for managing the Timetable</h4>

        <p>
          The timetable is the only part of the page, which content needs to refresh regularly. As working on a static site, and applied the Vuejs just on a few particular sections of the page, I used jsdelivr CDN to reach dependencies.
          I created a Vue instance, which stores the data of the actual timetable. For the MVP it was enough to have this file to refresh, but not for later use.
        </p>

        <h4 class="subheading-text">Accessibility</h4>

        <p class="text">
          Accessibility is always an important aspect during the developing process, as it was on this project as well. Therefore I provided some basic features for making the ability to access the website for everyone.
        </p>

        <ul class="textlist">
          <li>
            I provided appropriate page semantics, as mark up the content accurately, using the correct structural element
          </li>

          <li>
            I used alternative text for inline images.
          </li>

          <li>
            Didn't let videos play automatically on page load.
          </li>

          <li>
            Didn't allow users to rely on colour alone to discern page elements, I used tonal and size contrasts.
          </li>
        </ul>

        <h3 class="heading-text">Feedback</h3>
        <p class="text quote">
          <q>
            I love every part of it, it's just amazing! I have opened it since yesterday more than it is normal!
          </q>
        </p>

        <p class="text quote">
          <q>
            I feel like I have wings now, and I can reach the sky. This is some kind of walking-through-the-wall feeling. I hurry to share it everywhere I can!
          </q>
        </p>

        <p class="quote">
          <q>
            Since you've made it [the website], most of my new students come from there.
          </q>
        </p>

        <h3 class="heading-text">Takeaways</h3>
        <p>
          According to the website traffic data, the average number of visitors of Harmonie's website has risen from 3 to 12 per day.
          The conversion rate (via phone or email) has risen from 1 to 5 weekly by average.
        </p>

        <h4 class="subheading-text">What did I learn?</h4>
        <p>
          This project started when began with Vue.js so I could see how the very basics are working in progress.
          I faced the challenge of creating an interface both from the user experience and the visual perspective.
        </p>

        <h4 class="subheading-text">Future features</h4>
        <ul class="textlist">
          <li>
            apply button under each class
          </li>

          <li>
            user interface/google sheet managing the timetable
          </li>

          <li>
            animated SVG illustrations
          </li>

          <li>
            latest workshops on the Home screen
          </li>
        </ul>
      </div>
    </article>
</template>
