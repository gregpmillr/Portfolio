import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Column } from "./Column";
import { SectionBody } from "./SectionBody";
import { ResumeTimelineBlock } from "./ResumeTimelineBlock";
import { SkillLine } from "./SkillLine";
import { SkillDots } from "./SkillDots";
import {createUseStyles} from "react-jss";
import { SubSectionHeader } from "./SubSectionHeader";

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    width: '70%',
    margin: '0 auto',
    overflow: 'auto',
    padding: '0px 40px',
    overscrollBehavior: 'contain',
  },
  section: {
    marginTop: '70px',
  },
  resumeContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  columnPadding: {
    padding: '0px 20px',
    paddingTop: '15px'
  },
  flexWrap: {
    flexBasis: '45%',
  },
  borderLeft: {
    borderLeft: '1px solid rgba(197,202,213,.15)',
  },
  orange: {
    color: '#feb13e',
  },
  skillBackground: {
    '& li': {
      listStyleType: 'none !important',
    },
  },
  '@media (max-width: 1450px)': {
    container: {
      boxSizing: 'border-box',
      width: '100%',
    },
    borderLeft: {
      border: 'none'
    },
  }
})

export const Resume = () => {
  const classes = useStyles();

  return (
    <article className={classes.container}>
      <section className={classes.section}>
        <SectionHeader><span className={classes.orange}><strong>Resume</strong></span></SectionHeader>
        <div className={classes.resumeContainer}>
          <Column rootClasses={classes.columnPadding}>
            <SubSectionHeader>EXPERIENCE</SubSectionHeader>
            <SectionBody>
              <ResumeTimelineBlock 
                date="2017 - Present"
                dateTagActive={true}
                title="Lead Developer"
                subtitle="Tranquility Online"
                body="Collaborate with all company members to implement ideas and lead development team."
              />
            </SectionBody>
            <SectionBody>
              <ResumeTimelineBlock 
                date="2017 - 2018"
                title="Teacher Assistant"
                subtitle="Dalhousie University"
                body="Lead Teacher Assistant for Mobile Computing and Server-side Scripting."
              />
            </SectionBody>
            <SectionBody>
              <ResumeTimelineBlock 
                date="2017 - 2017"
                title="Business Intelligence (Co-op)"
                subtitle="Emera Energy"
                body="BI solutions in SQL, Microsoft Stack from timeline datasets aiding traders to make informed decisions."
              />
            </SectionBody>
          </Column>
          <Column rootClasses={`${classes.borderLeft} ${classes.columnPadding}`}>
            <SubSectionHeader>EDUCATION</SubSectionHeader>
            <SectionBody>
              <ResumeTimelineBlock 
                date="2016 - 2019"
                title="Applied Computer Science"
                subtitle="Halifax"
                body="Bachelor's Degree in Applied Computer Science at Dalhousie University, Halifax, Nova Scotia."
              />
            </SectionBody>
            <SectionBody>
              <ResumeTimelineBlock 
                date="2014 - 2016"
                title="Database Development"
                subtitle="Nova Scotia Community College"
                body="Coursework - Version control, Frontend Development, Backend Development, Database Development, Design Patterns, Data Structures, Algorithms, Project Management"
              />
            </SectionBody>
            <SectionBody>
              <ResumeTimelineBlock 
                date="2011 - 2013"
                title="High School"
                subtitle="Brigewater Junior Senior High School"
                body="high School diploma in Bridgewater, Nova Scotia."
              />
            </SectionBody>
          </Column>
        </div>
      </section>


      <section className={classes.section}>
        <SectionHeader>
          <span className={classes.orange}><strong>My Skills</strong></span>
        </SectionHeader>        
        <div className={classes.resumeContainer}>
          <Column rootClasses={`${classes.flexWrap}  ${classes.columnPadding}`}>
            <SubSectionHeader>CODING</SubSectionHeader>
            <SectionBody styles={{padding: '10px 0px'}}>
              <SkillLine title="Backend" width="95%" />
              <SkillLine title="Frontend" width="90%" />
              <SkillLine title="DevOps" width="60%" />
              <SkillLine title="SysOps" width="40%" />
            </SectionBody>
          </Column>
          <Column rootClasses={`${classes.flexWrap} ${classes.borderLeft} ${classes.columnPadding}`}>
            <SubSectionHeader>LANGUAGES / FRAMEWORKS</SubSectionHeader>
            <SectionBody styles={{padding: '10px 0px'}}>
              <SkillDots title="Golang" fill={9} />
              <SkillDots title="React" fill={9} />
              <SkillDots title="Laravel" fill={6} />
              <SkillDots title="JavaScript" fill={8} />
            </SectionBody>
          </Column>
        </div>
      </section>

    </article>
  )
}