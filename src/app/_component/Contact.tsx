import React from 'react'
import GlobalSectionTitle from './GlobalSectionTitle'
import FontAwesome from './FontAwesomeIcon';
import {  faFacebookF, faGithub, faWhatsapp,faGooglePlusG} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
const Contact = () => {
  return (
    <div className='my-6 bg-gray-100 p-2' id='contact'>
          <GlobalSectionTitle>Contact</GlobalSectionTitle>

          <div className='w-11/12 flex flex-wrap md:flex-nowrap p-2'>
              <div className='w-full md:w-1/2 mb-3'>
          <div className='flex '>
            <span className='flex justify-center items-center p-1 '><FontAwesome icon={faGooglePlusG}  size="2xl"  style={{color:"skyblue"}}
            ></FontAwesome>
            </span>
            <p className='p-1 mx-1 text-lg'>01093389354</p>
          </div>
          
                   <div className='flex '>
            <span className='flex justify-center items-center p-1 '><FontAwesome icon={faGooglePlusG}  size="2xl"  style={{color:"skyblue"}}
            ></FontAwesome>
            </span>
            <p className='p-1 mx-1 text-lg '>omaralihussien55@gmail.com</p>
                  </div>
              </div>

                 <div className='w-full md:w-1/2 '>
                  <ul className='w-full flex justify-center'>
            
                                  <li className='p-1 mx-1 '>
                         <a className='rounded-2xl flex  shadow-md size-12 justify-center items-center' href='https://www.facebook.com/people/Omar-Ali/pfbid02uNQey46HW73M41gPAKACSFRXkSzpD8J6gv9XTACMmMCXBP3rnCySDHkuPV3YH5MKl/' target="_blank">
                          <FontAwesome icon={faFacebookF}  size="2xl"  color='blue'
                         ></FontAwesome>
                           </a>
            </li>
            
                      <li className='p-1 mx-1 '>
                         <a className='rounded-2xl flex  shadow-md size-12 justify-center items-center' href='https://www.linkedin.com/checkpoint/challengesV2/AQHAknj95F_1SwAAAZCDr2PhocDZRCZPv7rIQcdKZT4bewp8p-s6lgoVnHRiJ4Hl6YP4pG4p8nD32b8n1-CqbPUIQ9uR5RBNLw?original_referer=https%3A%2F%2Fomaralihussien55.github.io%2F' target="_blank">
                          <FontAwesome icon={faLinkedin}  size="2xl"  style={{color:"skyblue"}}
                         ></FontAwesome>
                           </a>
            </li>
                                  <li className='p-1 mx-1 '>
                         <a className='rounded-2xl flex  shadow-md size-12 justify-center items-center' href='https://github.com/omaralihussien55' target="_blank">
                          <FontAwesome icon={faGithub}  size="2xl"  color='black' 
                         ></FontAwesome>
                           </a>
                      </li>
                   </ul>
                 </div>
          </div>
      
    </div>
  )
}

export default Contact
