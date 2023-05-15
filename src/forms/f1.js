import React from 'react'
import { useState } from 'react'

const F1 = () => {
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
      <th colSpan={3}>14.DISCLOSURE QUESTIONS</th>
      </tr>
      <tr className='heading'>
      <td colSpan={3} className='h2'>IF THE ANSWER TO ANY OF THE FOLLOWING QUESTIONS IS "YES", <br/> COMPLETE DETAILS OF ALL EVENTS OR PROCEEDINGS ON APPROPRIATE DRP(S)</td>
      </tr>
      <tr className='heading'>
      <th colSpan={3} >REFER TO EXPLANATION OF TERMS SECTION OF FORM U4 INSTRUCTIONS FOR EXPLANATIONS OF ITALICIZED TERMS.</th>
      </tr>
      <tr >
      <td className='heading'></td>
      <td className='heading' ><b>YES</b></td>
      <td className='heading'><b>NO</b></td>
      </tr>
      <tr >
          <td className='sub'><b>14A. (1) Have you ever:</b></td>
          <td ></td>
          <td ></td>
      </tr>
      <tr >    
          <td className='sub2'>
          
          <lable>(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to any felony?</lable></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to any felony?' value={values.yes} onChange={handleChage}/></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to any felony?' value={values.no} onChange={handleChage}/></td>
          </tr>
      <tr >
      <td className='sub2'>
          <label>(b) been changed with a any felony?</label>    
      </td>
      <td ><input type="radio" name='(b) been changed with a any felony?' value={values.yes} onChange={handleChage} /></td>
          <td ><input type="radio" name='(b) been changed with a any felony?' value={values.no} onChange={handleChage}/></td>      
      </tr>
      <tr >
          <td className='sub4'><b>(2) Based upon activities that occured while your exercised control over it, has an organization ever:</b></td>
          <td ></td>
          <td ></td>
      </tr>
      <tr>
      <td className='sub2'>
          
          <lable>(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to any felony?</lable></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to any felony?' value={values.yes} onChange={handleChage}/></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to any felony?' value={values.no} onChange={handleChage}/></td>
          </tr>
      <tr >
      <td className='sub2'>
          <label>(b) been changed with a any felony?</label>    
      </td>
      <td ><input type="radio" name='(b) been changed with a any felony?' value={values.yes} onChange={handleChage} /></td>
          <td ><input type="radio" name='(b) been changed with a any felony?' value={values.no} onChange={handleChage}/></td>      
      </tr>
      <tr >
          <td className='sub'><b>14B. (1) Have you ever:</b></td>
          <td ></td>
          <td ></td>
      </tr>
      <tr >    
          <td className='sub2'>
          
          <lable>(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to a misdemeanor involving: investments or an investment-related business or any fraud, false statements or omissions, wrongful taking of property, bribery, perjury, counterfeiting, extortion, or a conspiracy to commit any of these offenses?</lable></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to a misdemeanor involving: investments or an investment-related business or any fraud, false statements or omissions, wrongful taking of property, bribery, perjury, counterfeiting, extortion, or a conspiracy to commit any of these offenses?' value={values.yes} onChange={handleChage}/></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic, foreign, or military court to a misdemeanor involving: investments or an investment-related business or any fraud, false statements or omissions, wrongful taking of property, bribery, perjury, counterfeiting, extortion, or a conspiracy to commit any of these offenses?' value={values.no} onChange={handleChage}/></td>
          </tr>
      <tr >
      <td className='sub2'>
          <label>(b) been changed with a misdemeanor specified in 14B(1)(a)</label>    
      </td>
      <td ><input type="radio" name='(b) been changed with a misdemeanor specified in 14B(1)(a)' value={values.yes} onChange={handleChage} /></td>
          <td ><input type="radio" name='(b) been changed with a misdemeanor specified in 14B(1)(a)' value={values.no} onChange={handleChage}/></td>      
      </tr>
      <tr >
          <td className='sub4'><b>(2) Based upon activities that occured while your exercised control over it, has an organization ever:</b></td>
          <td ></td>
          <td ></td>
      </tr>
      <tr>
      <td className='sub2'>
          
          <lable>(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic or foreign court to a misdemeanor specified in 14B(1)(a)?</lable></td>
          <td ><input type="radio" name='(a) been convicted of or pled guilty or nolo contendere ("no contest") in a domestic or foreign court to a misdemeanor specified in 14B(1)(a)?' value={values.yes} onChange={handleChage}/></td>
          <td ><input type="radio" name='(a) been convicted12 of or pled guilty or nolo contendere ("no contest") in a domestic or foreign court to a misdemeanor specified in 14B(1)(a)?' value={values.no} onChange={handleChage}/></td>
          </tr>
      <tr >
      <td className='sub2'>
          <label>(b) been changed with a misdemeanor specified in 14B(1)(a)?</label>    
      </td>
      <td ><input type="radio" name='(b) been changed with a misdemeanor specified in 14B(1)(a)?' value={values.yes} onChange={handleChage} /></td>
          <td ><input type="radio" name='(b) been changed with a misdemeanor specified in 14B(1)(a)?' value={values.no} onChange={handleChage}/></td>      
      </tr>
      <tr className='heading'>
          <td className='h2'><b>Regulatory Action Disclosure</b></td>
          <td><b>YES</b></td><td><b>NO</b></td>
       </tr>
      <tr className='heading2'> 
          <td className='sub'><b>14C. Has the U.S. Securities and Exchange Commission or the Commodity Future Trading Commission ever; </b></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className='sub2'>(1) found you to have made a false statement or omission?</td>
          
      <td ><input type="radio" name='(1) found you to have made a false statement or omission?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(1) found you to have made a false statement or omission?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(2) found you to have been involved in a violation of its regulations or statutes?</td>
          <td ><input type="radio" name='(2) found you to have been involved in a violation of its regulations or statutes?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(2) found you to have been involved in a violation of its regulations or statutes?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(3) found you to have been the cause of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?</td>
          <td ><input type="radio" name='(3) found you to have been the casue of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(3) found you to have been the cause of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(4) entered an order against you in connection with investment-related activity?</td>
          <td ><input type="radio" name='(4) entered an order against you in connection with investment-related activity?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(4) entered an order against you in connection with investment-related activity?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
      <td className='sub2'>(5) imposed a civil money penalty on you, or ordered you to cease and desist from any activity?</td>
      <td ><input type="radio" name='(5) imposed a civil money penalty on you, or ordered you to cease and desist from any activity?' value={values.yes} onChange={handleChage} /></td>
  <td ><input type="radio" name='(5) imposed a civil money penalty on you, or ordered you to cease and desist from any activity?' value={values.no} onChange={handleChage}/></td>
  </tr>
      <tr>
      <td className='sub2'>(6) found you to have willfully violated any provision of the Securities Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act 1940, the Commodity Exchanege Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board, or found you to have been unable to comply with any provision of such Act, rule or regulation?</td>
      <td ><input type="radio" name='(6) found you to have willfully violated any provision of the Securities Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act 1940, the Commodity Exchanege Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board, or found you to have been unable to comply with any provision of such Act, rule or regulation?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(6) found you to have willfully violated any provision of the Securities Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act 1940, the Commodity Exchanege Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board, or found you to have been unable to comply with any provision of such Act, rule or regulation?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
      <td className='sub2'>(7) found you to have willfully aided, abetted, counseled, commanded, induced, or procured the violation by any person of any provision of the Securities Act of 1933,the Securities Exchange Act of1 1934, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking BOard?</td>
      <td ><input type="radio" name='(7) found you to have willfully aided, abetted, counseled, commanded, induced, or procured the violation by any person of any provision of the Securities Act of 1933,the Securities Exchange Act of1 1934, the Investment COmpany Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking BOard?' value={values.yes} onChange={handleChage} /></td>
  <td ><input type="radio" name='(7) found you to have willfully aided, abetted, counseled, commanded, induced, or procured the violation by any person of any provision of the Securities Act of 1933,the Securities Exchange Act of1 1934, the Investment COmpany Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking BOard?' value={values.no} onChange={handleChage}/></td>
  </tr>
      <tr>
        <td className='sub2'>(8) found you to have failed reasonably to supervise another person subject to your supervision, with a view to preventing the violation of any provision of the Securitird Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board?</td>
  
      <td ><input type="radio" name='(8) found you to have failed reasonably to supervise another person subject to your supervision, with a view to preventing the violation of any provision of the Securitird Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(8) found you to have failed reasonably to supervise another person subject to your supervision, with a view to preventing the violation of any provision of the Securitird Act of 1933, the Securities Exchange Act of 1934, the Investment Advisers Act of 1940, the Investment Company Act of 1940, the Commodity Exchange Act, or any rule or regulation under any of such Acts, or any of the rules of the Municipal Securities Rulemaking Board?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr className='heading2'> 
          <td className='sub'><b>14D. Has any other Federal regulatory agency or any state regulatory agency or foreign financial regulatory authority ever;</b></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className='sub2'>(a) found you to have made a false statement or omission or been dishonest, unfair or unethical?</td>
          
      <td ><input type="radio" name='(a) found you to have made a false statement or omission or been dishonest, unfair or unethical?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(a) found you to have made a false statement or omission or been dishonest, unfair or unethical?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
          <td className='sub2'>(b) found you to have been involved in a violation of investment-related regulations or statute(s)?</td>
          <td ><input type="radio" name='(b) found you to have been involved in a violation of investment-related regulations or statute(s)?' value={values.yes} onChange={handleChage} /></td>
      <td ><input type="radio" name='(b) found you to have been involved in a violation of investment-related regulations or statute(s)?' value={values.no} onChange={handleChage}/></td>
      </tr>
      <tr>
      <td className='sub2'>(c) found you to have been cause of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?</td>
      <td ><input type="radio" name='(c) found you to have been cause of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?' value={values.yes} onChange={handleChage} /></td>
  <td ><input type="radio" name='(c) found you to have been cause of an investment-related business having its authorization to do business denied, suspended, revoked or restricted?' value={values.no} onChange={handleChage}/></td>
  </tr>
  <tr>
  <td className='sub2'>(d) entered an orde against you in connection with an investment-related activity?</td>
  <td ><input type="radio" name='(d) entered an orde against you in connection with an investment-related activity?' value={values.yes} onChange={handleChage} /></td>
<td ><input type="radio" name='(d) entered an orde against you in connection with an investment-related activity?' value={values.no} onChange={handleChage}/></td>
</tr>
<tr>
  <td className='sub2'>(e) denied, suspended, or revoked your registration or license or otherwise, by order, prevented you from associating with an investment-related business or restricted your activities</td>
  <td ><input type="radio" name='(e) denied, suspended, or revoked your registration or license or otherwise, by order, prevented you from associating with an investment-related business or restricted your activities' value={values.yes} onChange={handleChage} /></td>
<td ><input type="radio" name='(e) denied, suspended, or revoked your registration or license or otherwise, by order, prevented you from associating with an investment-related business or restricted your activities' value={values.no} onChange={handleChage}/></td>
</tr>
            </div>
      </table>
    </div></div>
  )
}

export default F1
