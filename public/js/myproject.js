let blogs = []

let postProject = (event) => {
  event.preventDefault()
  const titleProject = document.getElementById('projectTitle').value
  let startProject = document.getElementById('projectStart').value
  let endProject = document.getElementById('projectEnd').value
  const descriptionProject = document.getElementById('projectDescription').value
  let imagesProject = document.getElementById('projectImage').files[0]

  // validation image if image haven't input file
  if (imagesProject) {
    imagesProject = URL.createObjectURL(imagesProject)
  }

  // looping value checkbox
  checkedValue = [];
  let technologyProject = document.getElementsByClassName('checkboxProject');
  let data = technologyProject.length
  for (var i = 0; i < data; i++) {
    if (technologyProject[i].checked == true) {
      checkedValue.push(technologyProject[i].value)
    }
  }

  let blog = {
    titleProject,
    descriptionProject,
    checkedValue,
    imagesProject,
    startProject,
    endProject,
  }
  blogs.push(blog)
  console.log(blog)

  renderProject()

}

const renderProject = () => {
  let renderCardProject = document.getElementById('projectContainer')

  renderCardProject.innerHTML = ""
  for (i = 0; i < blogs.length; i++) {
    renderCardProject.innerHTML += `
    <div class="card card-project" style="padding: 32px;">
      <div class="card-project-img">
        <img src="${blogs[i].imagesProject}" alt="project-image"
          style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="projectContentWrapper">
        <a href="detail-project.html" class="card-project-title">${blogs[i].titleProject}</a>
        <p class="card-project-duration">Duration : ${getDuration(blogs[i].startProject, blogs[i].endProject)}</p>
        <p class="card-project-desc">${blogs[i].descriptionProject}</p>
        <div class="card-project-icon">
        ${(function icon() {
        let string = ""
        for (let j = 0; j < blogs[i].checkedValue.length; j++) {
          string += `<div class="project-item">
                        <i class="${blogs[i].checkedValue[j]}"></i>
                    </div>`
        }
        return string
      })()}
          <div class="project-item">
            <i class="fa-brands fa-angular"></i>
          </div>
          <div class="project-item">
            <i class="fa-brands fa-vuejs"></i>
          </div>
          <div class="project-item">
            <i class="fa-brands fa-react"></i>
          </div>
          <div class="project-item">
            <i class="fa-brands fa-node-js"></i>
          </div>
        </div>
        <div class="btn-group" style="margin-top: 24px;">
          <a href="#" class="btn btn-primary" style="border-radius: 12px; width: 100%;">EDIT</a>
          <a href="#" class="btn btn-primary" style="border-radius: 12px; width: 100%;">DELETE</a>
        </div>
      </div>
    </div>
    `
  }
}


function getDuration(start, end) {
  let proStart = new Date(start)
  let proEnd = new Date(end)

  let distance = proEnd - proStart

  let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
  if (monthDistance != 0) {
    return monthDistance + ' month'
  } else {
    let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
    if (weekDistance != 0) {
      return weekDistance + ' weeks'
    } else {
      let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
      if (daysDistance != 0) {
        return daysDistance + ' Days Ago'
      } else {
        let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
        if (hoursDistance != 0) {
          return hoursDistance + ' Hours Ago'
        } else {
          let minuteDistance = Math.floor(distance / (60 * 1000))
          if (minuteDistance != 0) {
            return minuteDistance + ' Minutes Ago'
          } else {
            let secondDistance = Math.floor(distance / 1000)
            if (secondDistance != 0)
              return secondDistance + ' sec'
          }
        }
      }
    }
  }
}