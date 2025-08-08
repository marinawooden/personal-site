'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';


const Home = () => {
  const countBubbles = 10;
  const [bubbles, setBubbles] = useState([]);
  const [hasRenderedFirstBubbles, setHasRenderedFirstBubbles] = useState(false);
  const [poppingBubbles, setPoppingBubbles] = useState([]);

  // Move bubbles
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setBubbles((prevBubbles) => {
        let shouldFilter = false;
        let mappedBubbles = prevBubbles.map((bubble) => {
          if (bubble.bottom >= window.innerHeight) {
            shouldFilter = true;
          }

          return {
            ...bubble,
            bottom: bubble.bottom + 20, // Move bubble up by 10px
            dir: bubble.dir === "-" ? "+" : "-",
          }
        });

        if (shouldFilter) {
          return mappedBubbles.filter((bubble) => bubble.bottom <= window.innerHeight);
        } else {
          return mappedBubbles;
        }
      });
    }, 1000);

    return () => clearInterval(moveInterval); // Cleanup interval
  }, []);

  // Create bubbles
  useEffect(() => {
    if (bubbles.length >= countBubbles) {
      if (!hasRenderedFirstBubbles) {
        setHasRenderedFirstBubbles(true);
      }
    
      return;
    }; // Stop adding bubbles if max is reached

    function addNewBubble() {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        {
          id: Date.now(),
          bottom: -200,
          left: Math.floor(Math.random() * 101),
          dir: "+",
          scale: Math.floor(Math.random() * 2 + 1)
        }, // Add a new bubble with a unique ID
      ]);
    }

    let createBubbleTimeout;

    if (!hasRenderedFirstBubbles) {
      createBubbleTimeout = setTimeout(addNewBubble, 5000);
    } else {
      addNewBubble();
    }
    

    return () => clearTimeout(createBubbleTimeout); // Cleanup timeout
  }, [bubbles.length]); // Re-run only when bubbles.length changes

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.textHolder}>
          <h1 className={styles.title}>
            Marina Wooden
          </h1>
          <Image width='200' height='200' src='https://raw.githubusercontent.com/marinawooden/personal-site/refs/heads/main/public/img/ihatethispicturegoshineedanewone.jpg' alt='a headshot of me that I hate' />
          <div className={styles.socials}>
            <p className='overinflated-emoji'>📍</p>
            <p>Paris, Île-de-France</p>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/marina-wooden">LinkedIn</a>
            <FaEnvelope />
            <a href="mailto:woodenmarina@gmail.com">Email</a>
          </div>
        </div>
        <div className={styles.desc}>
          <h2>Hello! Bonjour!  Привет!</h2>
          <p>
            I’m currently an English language assistante in Île-de-France. Before that, I worked as a paralegal with the Washington Office of Public Defense, interned at the non-profit IRCO, and supported pro-bono attorneys at NWIRP.
          </p>
          <p>
            My work is shaped by my own experience growing up in a mixed-immigration status family, and I’m passionate about serving immigrant and asylee communities. I plan to attend law school to continue this work as an attorney.
          </p>
          <p>
            I also hold a B.S. in Informatics from the University of Washington and volunteered with RISE, an after-school tutoring program for refugee and immigrant children.
          </p>
        </div>
      </div>
      {/* Render bubbles (maybe in tha future :-( ) */}      
      {/* {bubbles.map((bubble) => (
        <div
          className={`${styles.bubble} ${poppingBubbles.includes(bubble.id) && styles.popping}`}
          key={bubble.id}
          onClick={() => {
            // add .popping class to this
            setPoppingBubbles((prev) => [...prev, bubble.id])
            setTimeout(() => {
              setBubbles((prev) => prev.filter(b => b.id !== bubble.id))
              setPoppingBubbles((prev) => prev.filter(b => b.id !== bubble.id))
            }, 1000);
          }}
          style={{
            bottom: `${bubble.bottom}px`,
            left: `calc(${bubble.left}vw ${bubble.dir} 10px)`,
            transform: `scale(${bubble.scale})`
          }}
        ></div>
      ))} */}
    </main>
  );
};

export default Home;
