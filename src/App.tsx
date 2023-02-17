import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

import styles from "./App.module.css"
import "./global.css"
import Sidebar from "./components/Sidebar";

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/83380946?v=4',
        name: "Breno Oliveira",
        role: "Software Engeneer I @ Liferay"
      },
      content: [
        {type: "paragraph", content: 'Fala galeraa,'},
        {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: "link", content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-02-16 16:27:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/leonardojcpg.png',
        name: "Leonardo Gomes",
        role: "Front-End Developer @ Kenzie"
      },
      content: [
        {type: "paragraph", content: 'Fala galeraa,'},
        {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: "link", content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-02-16 16:27:00'),

    },
  ]
  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map((post) => {
          return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
          )
        })}
      </main>

    </div>
    </>
  );
}

export default App;
