import React from 'react'
import { useState } from 'react'

const F2 = () => {
    const [values,setValues]=useState({
        yes:"yes",
        no:"no"
    })
    const handleChage=event=>{
        const {name,value}=event.target
        
        const new_value=(name)
        console.log(`${value} and ${name}`)
    }
  return (
    <div>
    <div className="header">
    <p className="bluehead">Rev.Form U4(05/2009)</p>
        <p className='head2'>UNIFORM APPLOCATION FOR SECURITIES INDUSTRY REGISTRATION OR TRANSFER</p>
        <table className='mainTable'>
            <tr className='headerborder'>
                <td style={{width:"780px",fontWeight:"bold",paddingLeft:"10px" }} >INDIVIDUAL NAME:</td>
                <td style={{width:"780px",fontWeight:"bold",paddingLeft:"10px" }}>INDIVIDUAL CRD #:</td>
            </tr>
            <tr className='headerborder'>
                <td style={{width:"780px",fontWeight:"bold",paddingLeft:"10px" }}>FIRM NAME:</td>
                <td style={{width:"780px",fontWeight:"bold",paddingLeft:"10px" }}>FIRM CRD #:</td>
            </tr>
        </table>
    </div>

    <div className='main'>
    <table>
    <div >
      <tr className='heading'>
      <th colSpan={3}>14.DISCLOSURE QUESTIONS(CONTINUED)</th>
      </tr>
      <tr >
      <td className='heading'></td>
      <td className='heading' ><b>YES</b></td>
      <td className='heading'><b>NO</b></td>
      </tr>
      <tr >
          <td className='sub3'><b>(2) Have you ever been the subject to any final order of a state securities commission (or any agency or office performing like functions), state authority that supervises or examines banks, savings associations, or credit unions, state insurance commission (or any agency or office performing like functions), an appropriate federal banking agency, or the National Credit Union Administration, that: </b></td>
          <td ></td>
          <td ></td>
      </tr>
      <tr >    
          <td className='sub2'>
          
          <lable> (a) bars you from association with an entity regulated by such commission, authority, agency, or officer, or from activities, or credit union activities; or</lable></td>
          <td ><input type="radio" name='(a) bars you from association with an entity regulated by such commission, authority, agency, or officer, or from activities, or credit union activities; or' value={values.yes} onChange={handleChage}/></td>
          <td ><input type="radio" name='(a) bars you from association with an entity regulated by such commission, authority, agency, or officer, or from activities, or credit union activities; or' value={values.no} onChange={handleChage}/></td>
          </tr>
      <tr >
      <td className='sub2'>
          <label>(b) constitutes a final order based on violations of any laws or regulations that prohibit fraudulent, manipulative, or deceptive conduct?</label>    
      </td>
      <td ><input type="radio" name='(b) constitutes a final order based on violations of any laws or regulations that prohibit fraudulent, manipulative, or deceptive conduct?' value={values.yes} onChange={handleChage} /></td>
          <td ><input type="radio" name='(b) constitutes a final order based on violations of any laws or regulations that prohibit fraudulent, manipulative, or deceptive conduct?' value={values.no} onChange={handleChage}/></td>      
      </tr>
      <tr className='heading2'> 
          <td className='sub'><b>14E. Has any self-regulatory organization ever; </b></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className='sub2'>(1) found you to have ade a false statement or omission?</td>
          
      <td ><input type="radio" name='(1) found you to have ade a false statement or omission?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(1) found you to have ade a false statement or omission?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(2) found you to have been involved in a violation of its rules (other than a violation designated as a "minor rule violation" under a plan approved by the U.S. Securities and Exchange Commission)?</td>
          <td ><input type="radio" name='(2) found you to have been involved in a violation of its rules (other than a violation designated as a "minor rule violation" under a plan approved by the U.S. Securities and Exchange Commission)?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(2) found you to have been involved in a violation of its rules (other than a violation designated as a "minor rule violation" under a plan approved by the U.S. Securities and Exchange Commission)?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(3) found you to have been the case of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?</td>
          <td ><input type="radio" name='(3) found you to have been the case of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(3) found you to have been the case of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(4) disciplined you by expelling or suspending you from membership, baning or suspending your association with its members, or restricting your activities</td>
          <td ><input type="radio" name='(4) disciplined you by expelling or suspending you from membership, baning or suspending your association with its members, or restricting your activities' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(4) disciplined you by expelling or suspending you from membership, baning or suspending your association with its members, or restricting your activities' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
      <td className='sub2'>(5) found you to have willfully violated any provision of the Securities Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act 1940, the Commodity Exchanege Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board, or found you to have been unable to comply with any provision of such Act, rule or regulation?</td>
      <td ><input type="radio" name='(5) found you to have willfully violated any provision of the Securities Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act 1940, the Commodity Exchanege Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board, or found you to have been unable to comply with any provision of such Act, rule or regulation?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(5) found you to have willfully violated any provision of the Securities Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act 1940, the Commodity Exchanege Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board, or found you to have been unable to comply with any provision of such Act, rule or regulation?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
      <td className='sub2'>(6) found you to have willfully aided, abetted, counseled, commanded, induced, or procured the violation by any person of any provision of the Securities Act of 1933, the Investment COmpany Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking BOard?</td>
      <td ><input type="radio" name='(6) found you to have willfully aided, abetted, counseled, commanded, induced, or procured the violation by any person of any provision of the Securities Act of 1933, the Investment COmpany Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking BOard?' value={values.yes} onChange={handleChage} /></td>
  <td ><input type="radio" name='(6) found you to have willfully aided, abetted, counseled, commanded, induced, or procured the violation by any person of any provision of the Securities Act of 1933, the Investment COmpany Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking BOard?' value={values.no} onChange={handleChage}/></td>
  </tr>
      <tr>
        <td className='sub2'>(7) found you to have failed reasonably to supervise another person subject to your supervision, with a view to preventing the violation of any provision of the Securitird Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board?</td>
  
      <td ><input type="radio" name='(7) found you to have failed reasonably to supervise another person subject to your supervision, with a view to preventing the violation of any provision of the Securitird Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(7) found you to have failed reasonably to supervise another person subject to your supervision, with a view to preventing the violation of any provision of the Securitird Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr className='heading2' >
            <td className='heading1'><b>14F. Have you ever had an authorization to act as an attorney, accountant or federal contractor that was revoked or suspended?</b></td>
            <td ><input type="radio" name='14F. Have you ever had an authorization to act as an attorney, accountant or federal contractor that was revoked or suspended?' value={values.yes} onChange={handleChage}/></td>
         <td ><input type="radio" name='14F. Have you ever had an authorization to act as an attorney, accountant or federal contractor that was revoked or suspended?' value={values.no} onChange={handleChage}/></td> 
        </tr>
        <tr className='heading2' >
            <td className='heading1'><b>14G. Have you been notified, in writing, that you are now the subject of any; </b></td>
            <td ></td>
         <td ></td> 
        </tr>
        <tr>
        <td className='sub2'>(1) regulatory complaint or proceeding that could result in a "yes" answer to any part of 14C, D or E? (If "yes", complete the Regulatory Action Disclosure Reporting Page.)</td>
        
    <td ><input type="radio" name='(1) regulatory complaint or proceeding that could result in a "yes" answer to any part of 14C, D or E? (If "yes", complete the Regulatory Action Disclosure Reporting Page.)' value={values.yes} onChange={handleChage} /></td>
    <td ><input type="radio" name='(1) regulatory complaint or proceeding that could result in a "yes" answer to any part of 14C, D or E? (If "yes", complete the Regulatory Action Disclosure Reporting Page.)' value={values.no} onChange={handleChage}/></td>
    </tr>
    <tr>
    <td className='sub2'>(2) Investigation that could result in a "yes" answer to any part of 14A, B, C, D or E? (if "yes", complete the Investigation Disclosure Reporting Page.)</td>
    
    <td ><input type="radio" name='(2) Investigation that could result in a "yes" answer to any part of 14A, B, C, D or E? (if "yes", complete the Investigation Disclosure Reporting Page.)' value={values.yes} onChange={handleChage} /></td>
     <td ><input type="radio" name='(2) Investigation that could result in a "yes" answer to any part of 14A, B, C, D or E? (if "yes", complete the Investigation Disclosure Reporting Page.)' value={values.no} onChange={handleChage}/></td>
    </tr>
    <tr className='heading'>
          <td className='h2'><b>Civil Judicial Disclosure</b></td>
          <td><b>YES</b></td><td><b>NO</b></td>
       </tr>
      
      <tr>
          <td className='sub'><b>14H. (1) Has any domestic or foreign court ever:</b></td>
          <td></td>
          <td></td>
      </tr>
      <tr><td className='sub2'>(a) enjoined you in connection with any investment- related activity?</td>
      <td ><input type="radio" name='(a) enjoined you in connection with any investment- related activity?' value={values.yes} onChange={handleChage}/></td>
      <td ><input type="radio" name='(a) enjoined you in connection with any investment- related activity?' value={values.no} onChange={handleChage} /></td> 
      </tr>
      <tr><td className='sub2'>(b) found that you were involved in a violation of any investment-related statute(s) or regulation(s)? </td><td ><input type="radio" name='(b) found that ypu wrer involved ina violation of any investment-related statute(s) or regulation(s)? ' value={values.yes} onChange={handleChage}/></td>
      <td ><input type="radio" name='(b) found that ypu wrer involved ina violation of any investment-related statute(s) or regulation(s)? ' value={values.no} onChange={handleChage} /></td> 
      </tr>
      <tr><td className='sub2'>(c) dismissed, pursuant to a settlement agreement, an investment-related civil action brought against you by a state or foreign financial regulatory authority?</td><td ><input type="radio" name='(c) dismissed, pursuant to a settlement agreement, an investment-related civil action brought against you by a state or foreign financial regulatory authority?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(c) dismissed, pursuant to a settlement agreement, an investment-related civil action brought against you by a state or foreign financial regulatory authority?' value={values.no} onChange={handleChage} /></td> 
      </tr>
      <tr >
            <td className='sub4'><b>(2) Are you named in any pending investment-related civil action that could result in a "yes" answer to any part of 14H(1)</b></td>
            <td ><input type="radio" name='(2) Are you named in any pending investment-related civil action that could result in a "yes" answer to any part of 14H(1)' value={values.yes} onChange={handleChage}/></td>
         <td ><input type="radio" name='(2) Are you named in any pending investment-related civil action that could result in a "yes" answer to any part of 14H(1)' value={values.no} onChange={handleChage}/></td> 
        </tr>
      <tr className='heading'><td className='h2'><b>Customer Compalint/Arbitration/Civil Litigation Disclosure</b></td>
          <td><b>YES</b></td>
          <td><b>NO</b></td>
      </tr>
      <tr >
        <td className='sub'><b>14I. (1) Have you ever been <u>named</u> as a respondent/defendant in an investment-related, consumer-initiated arbitration or civil litigation which alleged that you were involved in one or more sales practice violations and which:</b></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
          <td className='sub2'>(a) is still pending, or;</td>
          <td ><input type="radio" name='(a) is still pending, or;' value={values.yes} onChange={handleChage} /></td>
       <td ><input type="radio" name='(a) is still pending, or;' value={values.no} onChange={handleChage} /></td> 
      </tr>
      <tr>
          <td className='sub2'>(b) resulted in an arbitration award or civil judgement against you, regardless of amount, or;</td>
          <td ><input type="radio" name='(b) resulted in an arbitration award or civil judgement against you, regardless of amount, or;' value={values.yes} onChange={handleChage} /></td>
       <td ><input type="radio" name='(b) resulted in an arbitration award or civil judgement against you, regardless of amount, or;' value={values.no} onChange={handleChage}/></td>   
      </tr>
      <tr>
          <td className='sub2'>(c) was settled, prior to 02/18/2009, for an amount of $10,000 or more, or;</td>
          <td ><input type="radio" name='(c) was settled, prior to 02/18/2009, for an amount of $10,000 or more, or;' value={values.yes} onChange={handleChage} /></td>
       <td ><input type="radio" name='(c) was settled, prior to 02/18/2009, for an amount of $10,000 or more, or;' value={values.no} onChange={handleChage}/></td> 
      </tr>
      <tr>
          <td className='sub2'>(d) was settled, on or after 05/18/2009, for an amount of $15,000 or more?</td>
          <td ><input type="radio" name='(d) was settled, on or after 05/18/2009, for an amount of $15,000 or more?' value={values.yes} onChange={handleChage} /></td>
       <td ><input type="radio" name='(d) was settled, on or after 05/18/2009, for an amount of $15,000 or more?' value={values.no} onChange={handleChage}/></td> 
      </tr>
      </div>
      </table>
    </div> </div>
  )
}

export default F2
