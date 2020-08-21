import React from "react";

const Index = (props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Olá, eu sou o Daniel</h1>
      <div>{props.currentData}</div>
      <h2 className="text-bold text-3xl">Meus repos no Github</h2>
      <div>
        {props.repos.map((repo) => {
          return (
            <div
              key={repo.id}
              className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow"
            >
              <h3 className="font-bold">{repo.full_name}</h3>
              <p>
                Language: {repo.language} / Stars: {repo.stargazers_count}
              </p>
              <p>Fork: {repo.fork}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Renderiza props no server via NextJS
export async function getServerSideProps(context) {
  const resRepos = await fetch(
    "https://api.github.com/users/tuliofaria/repos?sort=updated"
  );
  const originalRepos = await resRepos.json();

  const dontShowRepos = ["tuliofaria/acesso-bds-"];
  const isNotFork = (repo) => !repo.fork;
  const dontShowFilter = (repo) => dontShowRepos.indexOf(repo.full_name) === -1;

  const extractData = (repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  });
  const repos = originalRepos
    .filter(isNotFork)
    .filter(dontShowFilter)
    .map(extractData);

  return {
    props: {
      currentData: new Date().toString(),
      repos,
    },
  };
}
export default Index;

/*
setInterval(function () {
  console.log("waiting...");
  let ultimoLogin = document.getElementById("L_UltimoLogin_41948").innerHTML;
  let sec =
    document.getElementById("L_ContDown_1_41948").innerHTML +
    document.getElementById("L_ContDown_2_41948").innerHTML;

  if (ultimoLogin !== "henrybh" && sec === "02") {
    ExecutarLance("41948");
    console.log("lance");
  }
}, 1000);
*/
