import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Berzaf from './Berzaf_Teklu.png'



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Berzaf}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Berzaf Teklu</h2>
            <h4 style={{color: 'grey'}}>Web Developer </h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Frontend developer. I have the skills and training needed to help develop and maintain websites and to make improvements that will enhance functionality.
                 I am an excellent team player with strong attention to detail and an important ability to work and perform well under pressure. I have an extensive knowledge of JavaScript, React, C#, PHP and HTML5.
                </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>622 East 13th St Sioux Falls, SD</p>
            <h5>Phone</h5>
            <p>(605) 400-8859</p>
            <h5>Email</h5>
            <p>berzafastroo2012@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2021}
              schoolName="Southeast Tech (STC), Sioux Falls, SD, USA "
              schoolDescription="Web Programing Certificate"
               />
              
              <Education
                startYear={2020}
                endYear={2021}
                schoolName="Nucamp Coding Bootcamp, Online, USA"
                schoolDescription="Full-Stack and Mobile Development"
               />

              <Education
                startYear={2015}
                endYear={2019}
                schoolName="University of Science and Technology, China"
                schoolDescription="Doctor of Philosophy in Astrophysics"
               />
               <Education
                startYear={2011}
                endYear={2013}
                schoolName="Addis Ababa University, Ethiopia"
                schoolDescription="Master of Science in Astrophysics"
               />

              <Education
                startYear={2008}
                endYear={2011}
                schoolName="Mekelle University, Ethiopia"
                schoolDescription="Bachelor of Science in Physics"
               />
    
              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="General Assembly, Spherion, Sioux Falls, SD"
              jobDescription="-At Graco Inc, set up, assembled, repaired, tested and packaged final and sub-assemblies. 
              Provided assembly of parts following blueprints, quality control of finished units
              "
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Courtesy Clerk, Hy-Vee, Sioux Falls, SD"
                jobDescription="-Provided excellent customer service and quality assurance.
                Assisted customers to secure product needs
                "
                />

              <Experience
                startYear={2014}
                endYear={2015}
                jobName="Quality Assurance Leader, Adigrat University, Adigrat, Tigray"
                jobDescription="-Followed up on the quality of education, research and community services based on established standards and Evaluated the quality of teaching-learning process.
                Reviewed annual instructional plans, periodic intuitional reports and provided feedback to concerned bodies
                "
              
                />

              <Experience
                startYear={2013}
                endYear={2015}
                jobName="Adigrat University, Adigrat, Tigray"
                jobDescription="-Evaluated student work, including tests and assignments based on departmental and curriculum requirements
                Planned and delivered lectures to students.
                Achieved proper use and maintenance of laboratory and academic equipment.
                Prepared and integrated lab equipment to setup equipment about class subject.
                "                
              
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>

                <Skills
                  skill="JavaScript &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; React"
                  />
                  <Skills
                    skill="HTML/CSS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  React Native"
                    />
                    <Skills
                      skill="NodeJS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PHP"
                      />
                      <Skills
                        skill="Express &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#"
                        />
                



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;