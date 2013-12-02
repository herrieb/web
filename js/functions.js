// JavaScript Document
function showfeedbackbox() { 
	document.getElementById('feedbackBox').innerHTML='<p><br/><label for="feedback" name="feedback">feedback</label><br/><textarea placeholder="Voer hier uw feedback in..." name="feedback" id="feedback" rows="7" ></textarea></p><p><label for="email" name="email">UW E-MAILADRES</label><br/><input type="email" name="email" id="email" placeholder="info@example.com" /></p><p><label for="resendQuestion" name="resendQuestion"></label><button name="resendQuestion" id="resendQuestion">Verzenden</button></p>';
}