function addSkill(){
    let name=document.getElementById("skillName").value;
    let percent=document.getElementById("skillPercent").value;

    let container=document.getElementById("skills");

    let skill=document.createElement("div");
    skill.className="skill";
    let title=document.createElement("div");
    title.className="skill-name";
    title.innerText=name + "("+ percent +"%)";

    let bar=document.createElement("div");
    bar.className="bar";

    let fill=document.createElement("div");
    fill.className="fill";
    fill.style.width=percent + "%";
    bar.appendChild(fill);
    skill.appendChild(title);
    skill.appendChild(bar);
    container.appendChild(skill);

    document.getElementById("skillName").value="";
    document.getElementById("skillPercent").value="";


}