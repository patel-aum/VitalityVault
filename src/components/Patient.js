
import React from 'react'
import styles from './PatientPanel.css'
const PatientPanel = (props) => {
  return (
    <div>
      <div className={styles['PatientPanel']}>
        <div className={styles['desktop1']}>
          <span className={styles['text']}>
            <span>Room No: ABC123</span>
          </span>
          <div className={styles['frame13']}>
            <div className={styles['frame3']}>
              <span className={styles['text02']}>
                <span>
                  <span>
                    Photo
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Preview</span>
                </span>
              </span>
            </div>
          </div>
          <span className={styles['text07']}>
            <span>
              Name:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className={styles['text09']}>
            <span>
              Age:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className={styles['text11']}>
            <span>
              Weight:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className={styles['text13']}>
            <span>
              Doctor:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className={styles['text15']}>
            <span>
              Doctor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className={styles['text17']}>
            <span>
              Health Issue:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className={styles['text19']}>
            <span>Oxygen Level:</span>
          </span>
          <span className={styles['text21']}>
            <span>Blood Pressure:</span>
          </span>
          <span className={styles['text23']}>
            <span>Temprature:</span>
          </span>
          <div className={styles['frame14']}>
            <span className={styles['text25']}>
              <span>
                Doctor Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles['frame16']}>
            <span className={styles['text27']}>
              <span>health issue</span>
            </span>
          </div>
          <div className={styles['frame17']}>
            <span className={styles['text29']}>
              <span>XXX</span>
            </span>
          </div>
          <div className={styles['frame18']}>
            <span className={styles['text31']}>
              <span>XXX</span>
            </span>
          </div>
          <div className={styles['frame15']}>
            <span className={styles['text33']}>
              <span>
                Patient Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles['frame19']}>
            <span className={styles['text35']}>
              <span>
                XXX
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles['frame20']}>
            <span className={styles['text37']}>
              <span>
                XXX
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles['frame21']}>
            <span className={styles['text39']}>
              <span>
                XXX
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles['frame22']}>
            <span className={styles['text41']}>
              <span>no comments</span>
            </span>
          </div>
          <img
            src="/playground_assets/line15156-jxic.svg"
            alt="Line15156"
            className={styles['line1']}
          />
          <span className={styles['text43']}>
            <span>last update on 25/01/2023 16:53</span>
          </span>
          <span className={styles['text45']}>
            <span>last update on 25/01/2023 16:53</span>
          </span>
          <span className={styles['text47']}>
            <span>last update on 25/01/2023 16:53</span>
          </span>
          <div className={styles['group1']}>
            <div className={styles['frame5']}></div>
            <span className={styles['text49']}>
              <span>REPORTS</span>
            </span>
          </div>
          <span className={styles['text51']}>
            <span>
              <span>Doctor Comments:</span>
              <br></br>
              <span></span>
            </span>
          </span>
        </div>
        <div className={styles['nav-bar']}>
          <div className={styles['frame1']}>
            <div className={styles['frame2']}>
              <span className={styles['text56']}>
                <span>Sign out</span>
              </span>
            </div>
          </div>
          <img
            src="/playground_assets/logoframe5120-7tl9.svg"
            alt="logofrAME5120"
            className={styles['logofr-a-m-e']}
          />
        </div>
      </div>
    </div>
  )
}

export default PatientPanel