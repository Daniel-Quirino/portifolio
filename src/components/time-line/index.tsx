import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';

import dti from '../../assets/companies/dti.png'
import hotmart from '../../assets/companies/hotmart.png'

import './time-line.css'

const historic = [
  {
    company: 'dti digital',
    src: dti,
    jobs: [
      {
        role: 'Estagiário',
        time: '2 anos',
      },
      {
        role: 'Analista de Sistemas',
        time: '6 messes',
      }
    ]
  },
  {
    company: 'Hotmart',
    src: hotmart,
    jobs: [
      {
        role: 'Desenvolvedor Front End',
        time: '6 meses',
      },
    ]
  }
]

export default function CustomizedTimeline() {

  return (
    <Timeline align="left">
      {historic.map((company) => {
        return (
          <>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  <div className='company-name'>
                    <div>{company.company}</div>
                  </div>
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot >
                  <div className='dti'>
                    <img src={company.src} />
                  </div>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
              </TimelineContent>
            </TimelineItem>
            {company.jobs.map((job) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">

                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="company-role">
                      {job.role}
                    </div>
                    <div className="company-time">
                      {job.time}
                    </div>

                  </TimelineContent>
                </TimelineItem>
              )
            })}
          </>
        )
      })}
    </Timeline>
  );
}