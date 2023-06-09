import { useState } from "react"

function F3() {
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
            <td className='sub3'><b>(2) Have you ever been the subject of an investment-related, consumer-initiated (written or oral)complaint,
            which alleged that you were involved in one or more sales practice violations, and which:</b></td>
            <td ></td>
            <td ></td>
        </tr>
        <tr >    
            <td className='sub2'>
            
            <lable> (a) was settled, prior to 05/18/2009, for an amount of $10,000 or more,or,</lable></td>
            <td ><input type="radio" name='(a) was settled, prior to 05/18/2009, for an amount of $10,000 or more,or,' value={values.yes} onChange={handleChage}/></td>
            <td ><input type="radio" name='(a) was settled, prior to 05/18/2009, for an amount of $10,000 or more,or,' value={values.no} onChange={handleChage}/></td>
            </tr>
        <tr >
        <td className='sub2'>
            <label>(b)was settled, on or after 05/18/2009, for an amount of $15,000 or more?</label>    
        </td>
        <td ><input type="radio" name='(b)was settled, on or after 05/18/2009, for an amount of $15,000 or more?' value={values.yes} onChange={handleChage} /></td>
            <td ><input type="radio" name='(b)was settled, on or after 05/18/2009, for an amount of $15,000 or more?' value={values.no} onChange={handleChage}/></td>      
        </tr>
        <tr> 
            <td className='sub3'><b>(3) Within the past twenty four (24) months,have you been the subject of an investment-related consumer-initiated, written complaint, not otherwise reported under question 14I(2) above, which: </b></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td className='sub2'>(a) alleged that you were involved in one or more sales practice violations and conatined a claim for compensatory damages of $5,000 or more (if no damage amount is alleged, the complaint must be reported unless the firm has made a good faith determination that the damges from the alleged conduct would be less than $5,000), or,</td>
            
        <td ><input type="radio" name='(a) alleged that you were involved in one or more sales practice violations and conatined a claim for compensatory damages of $5,000 or more (if no damage amount is alleged, the complaint must be reported unless the firm has made a good faith determination that the damges from the alleged conduct would be less than $5,000), or,' value={values.yes} onChange={handleChage} /></td>
        <td ><input type="radio" name='(a) alleged that you were involved in one or more sales practice violations and conatined a claim for compensatory damages of $5,000 or more (if no damage amount is alleged, the complaint must be reported unless the firm has made a good faith determination that the damges from the alleged conduct would be less than $5,000), or,' value={values.no} onChange={handleChage}/></td>
        </tr>
        <tr>
            <td className='sub2'>(b) alleged that you were involved in forgery, theft, misappropriation or conversion of funds or securities</td>
            <td ><input type="radio" name='(b) alleged that you were involved in forgery, theft, misappropriation or conversion of funds or securities' value={values.yes} onChange={handleChage} /></td>
        <td ><input type="radio" name='(b) alleged that you were involved in forgery, theft, misappropriation or conversion of funds or securities' value={values.no} onChange={handleChage}/></td>
        </tr>
        <tr ><td className='sub3'><b>Answer questions (4) and (5) below only for arbitration claims or civil litigaton field on or after 05/18/2009.</b></td><td></td><td></td></tr>
        <tr><td className='sub3'><b>(4) Have you ever been the subject of an investment-related, consumer-initiated arbitration claim or civil litigation which alleged that you were involved in one or more sales practice violations, and which:</b></td><td></td><td></td></tr>
        <tr><td className='sub2'>(a) was settled for an amount of $15,000 or more, or </td>
        <td ><input type="radio" name='(a) was settled for an amount of $15,000 or more, or' value={values.yes} onChange={handleChage}/></td>
        <td ><input type="radio" name='(a) was settled for an amount of $15,000 or more, or' value={values.no} onChange={handleChage}/></td>
        </tr>
        <tr>
            <td className='sub2'>(b) resulted in an arbitration award or civil judgment against any named respondent(s)/defendant(s), regardless of amount?</td>
            <td ><input type="radio" name='(b) resulted in an arbitration award or civil judgment against any named respondent(s)/defendant(s), regardless of amount?' value={values.yes} onChange={handleChage}/></td>
            <td ><input type="radio" name='(b) resulted in an arbitration award or civil judgment against any named respondent(s)/defendant(s), regardless of amount?' value={values.no} onChange={handleChage}/></td>
        </tr>
        <tr>
            <td className='sub3'><b>(5) Within the past twenty four (24) months, have you been the subject of an investment-related, consumer-initiated arbitration claim or civil litigation not otherwise reported under question 14I(4) above, which:</b></td><td></td><td></td>
         </tr>
         <tr>
            <td className='sub2'>(a) alleged that you were involved in one or more sales practice violations and conatined a claim for compensatory damages of $5,000 or more (if no damage amount is alleged, the arbitration claim or civil litigation must be reported unless the firm has made a good faith determination that the damages from the alleged conduct would be less than $5,000), or,</td>
            <td ><input type="radio" name="(a) alleged that you were involved in one or more sales practice violations and conatined a claim for compensatory damages of $5,000 or more (if no damage amount is alleged, the arbitration claim or civil litigation must be reported unless the firm has made a good faith determination that the damages from the alleged conduct would be less than $5,000), or," value={values.yes} onChange={handleChage}/></td>
        <td ><input type="radio" name='(a) alleged that you were involved in one or more sales practice violations and conatined a claim for compensatory damages of $5,000 or more (if no damage amount is alleged, the arbitration claim or civil litigation must be reported unless the firm has made a good faith determination that the damages from the alleged conduct would be less than $5,000), or,' value={values.no} onChange={handleChage}/></td>
         </tr>
         <tr><td className='sub2'>(b) alleged that you were involved in forgery, theft, misappropriation or conversion of funds or securities</td>
         <td ><input type="radio" name='(b) alleged that you were involved in forgery, theft, misappropriation or conversion of funds or securities' value={values.yes} onChange={handleChage}/></td>
         <td ><input type="radio" name='(b) alleged that you were involved in forgery, theft, misappropriation or conversion of funds or securities' value={values.no} onChange={handleChage} /></td> 
         </tr>
         <tr className='heading'>
            <td className='h2'><b>Termination Disclosure</b></td>
            <td><b>YES</b></td><td><b>NO</b></td>
         </tr>
        
        <tr>
            <td className='sub'><b>14J. Have you ever voluntarily resigned, been discharged or permitted to resign after allegations wer made that accused you of:</b></td>
            <td></td>
            <td></td>
        </tr>
        <tr><td className='sub2'>(1) violating investment-related statutes, regulations, rules, or industry standards of conduct?</td>
        <td ><input type="radio" name='(1) violating investment-related statutes, regulations, rules, or industry standards of conduct?' value={values.yes} onChange={handleChage}/></td>
        <td ><input type="radio" name='(1) violating investment-related statutes, regulations, rules, or industry standards of conduct?' value={values.no} onChange={handleChage} /></td> 
        </tr>
        <tr><td className='sub2'>(2) fraud or the wrongful taking of property?</td><td ><input type="radio" name='(2) fraud or the wrongful taking of property?' value={values.yes} onChange={handleChage}/></td>
        <td ><input type="radio" name='(2) fraud or the wrongful taking of property?' value={values.no} onChange={handleChage} /></td> 
        </tr>
        <tr><td className='sub2'>(3) failure to supervise in connction with investment-related statutes, regulations, rules or industry standards of conduct?</td><td ><input type="radio" name='(3) failure to supervise in connction with investment-related statutes, regulations, rules or industry standards of conduct?' value={values.yes} onChange={handleChage} /></td>
        <td ><input type="radio" name='(3) failure to supervise in connction with investment-related statutes, regulations, rules or industry standards of conduct?' value={values.no} onChange={handleChage} /></td> 
        </tr>
        <tr className='heading'><td className='h2'><b>Financial Disclosure</b></td>
            <td><b>YES</b></td>
            <td><b>NO</b></td>
        </tr>
        <tr >
          <td className='sub'><b>14K. Within the past 10 years:</b></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
            <td className='sub2'>(1) have yoy made a compromise with creditors, filed a bankruptcy petition or been the subject of an involuntary bankruptcy petition?</td>
            <td ><input type="radio" name='(1) have yoy made a compromise with creditors, filed a bankruptcy petition or been the subject of an involuntary bankruptcy petition?' value={values.yes} onChange={handleChage} /></td>
         <td ><input type="radio" name='(1) have yoy made a compromise with creditors, filed a bankruptcy petition or been the subject of an involuntary bankruptcy petition?' value={values.no} onChange={handleChage} /></td> 
        </tr>
        <tr>
            <td className='sub2'>(2) based upon events that occurred while you exercised control over it, has an organization made a compromise with creditors, filed a bankruptcy petition or been the subject of an involuntary bankruptcy petition?</td>
            <td ><input type="radio" name='(2) based upon events that occurred while you exercised control over it, has an organization made a compromise with creditors, filed a bankruptcy petition or been the subject of an involuntary bankruptcy petition?' value={values.yes} onChange={handleChage} /></td>
         <td ><input type="radio" name='(2) based upon events that occurred while you exercised control over it, has an organization made a compromise with creditors, filed a bankruptcy petition or been the subject of an involuntary bankruptcy petition?' value={values.no} onChange={handleChage}/></td>   
        </tr>
        <tr>
            <td className='sub2'>(3) based upon events that occured while you exercised control over it, has a broker or dealer been the subject of an involuntary bankruptcy petition, or had a trustee appointed, or hadd a direct payment procedure initiates under the Securitirs Investor Protrction Act?</td>
            <td ><input type="radio" name='(3) based upon events that occured while you exercised control over it, has a broker or dealer been the subject of an involuntary bankruptcy petition, or had a trustee appointed, or hadd a direct payment procedure initiates under the Securitirs Investor Protrction Act?' value={values.yes} onChange={handleChage} /></td>
         <td ><input type="radio" name='(3) based upon events that occured while you exercised control over it, has a broker or dealer been the subject of an involuntary bankruptcy petition, or had a trustee appointed, or hadd a direct payment procedure initiates under the Securitirs Investor Protrction Act?' value={values.no} onChange={handleChage}/></td> 
        </tr>
        <tr className='heading'><td className='heading1'><b>14L. Has a bonding company ever denied, paid out on, or revoked a bond for you?</b></td>
        <td ><input type="radio" name='14L. Has a bonding company ever denied, paid out on, or revoked a bond for you?' value={values.yes} onChange={handleChage} /></td>
        <td ><input type="radio" name='14L. Has a bonding company ever denied, paid out on, or revoked a bond for you?' value={values.no} onChange={handleChage}/></td> 
        </tr>
        <tr className='heading' >
            <td className='heading1'><b>14M. Do you have any unsatisfied judgments or liens against you?</b></td>
            <td ><input type="radio" name='14M. Do you have any unsatisfied judgments or liens against you?' value={values.yes} onChange={handleChage}/></td>
         <td ><input type="radio" name='14M. Do you have any unsatisfied judgments or liens against you?' value={values.no} onChange={handleChage}/></td> 
        </tr>
        </div>
        </table>
    </div>  </div>
  );
}

export default F3;
