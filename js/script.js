$(document).ready(function() {

	$(".button-collapse").sideNav();
    $('select').material_select();
    $('.modal').modal();

    /**/

    $('#labelregular').hide();
    $('#labelinscribiste').hide();
    $('#error').hide();

	$('#regular').on('change', function() {
    	$('#labelregular').fadeIn();
    })
	
	$('#inscribiste').on('change', function() {
    	$('#labelinscribiste').fadeIn();
    })

     $('.modal').modal({
		
		startingTop: '0%', // Starting top style attribute
		endingTop: '0%' // Ending top style attribute
		
	});

	/*$('#configreset').click(function(){
		$('#calcindice').trigger("reset");
	});*/

	$('.button-collapse').sideNav({
      menuWidth: 250
  	});


    $(function(){
		$('#total').hide();
		$('#calcular').click(function() {
			total   = $('#total').val();

			job = $('#job');
			child = $('#child');
	        aprobadas = $('#aprobadas').val();
	        regular = $( "#regular" ).val();
	        inscribiste = $( "#inscribiste" ).val();
	        promedio = $( "#promedio" ).val();

	        if ( job.is(':checked') ) {
	        	job = 0.15;
	        } else {
	        	job = 0;
	        }

	        if ( child.is(':checked') ) {
	        	child = 0.05;
	        } else {
	        	child = 0;
	        }

			
			console.log(job +' + '+ child +' + (0.0063 * '+aprobadas+') + (0.03 * '+regular+') + (0.01*'+promedio+') + (('+regular+' / '+inscribiste+') * 0.3)');

			total = job + child + (0.0063*aprobadas) + (0.03*regular) + (0.01*promedio) + ((regular/inscribiste)*0.3);

			total = Math.floor(total * 100) / 100;

			console.log('total '+total);

			$('#total').text(total);
			$('#total').fadeIn();

			if (isNaN(total)) {
				$('#error').fadeIn();
			} else {
				$('#error').hide();
				$('#modal1').modal('open');	
			}
			
		}); 
	});

    

});


