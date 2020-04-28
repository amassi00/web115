function displayName(){
			var fullName = document.nameForm.fullName.value;
			document.getElementById("greeting").innerHTML = fullName;
			var personal = document.nameForm.personalBackground.value;
			var professional = document.nameForm.professionalBackground.value;
			var academic = document.nameForm.academicBackground.value;
			var subject = document.nameForm.subjectBackground.value;
			var platform = document.nameForm.computerPlatform.value;
			var reason = document.nameForm.classReason.value;
			var fact = document.nameForm.interestingFact.value;
			var also = document.nameForm.somethingElse.value;
			document.getElementById("nameForm").innerHTML = "<strong>Personal Background:</strong>" + " " + personal + "<br>" + "<br>" + "<strong>Professional Background:</strong>" + " " + professional + "<br>" + "<br>" + "<strong>Academic Background:</strong>" + " " + academic + "<br>" + "<br>" + "<strong>Background in the subject matter of this course:</strong>" + " " + subject + "<br>" + "<br>" + "<strong>Primary computer platform:</strong>" + " " + platform + "<br>" + "<br>" + "<strong>Reason for taking each class:</strong>" + " " + reason + "<br>" + "<br>" + "<strong>An interesting fact to remember me by:</strong>" + " " + fact + "<br>" + "<br>" + "<strong>Something else I'd like to share:</strong>" + " " + also;
			
		
		}
