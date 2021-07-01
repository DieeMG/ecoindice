$(document).ready(function() {

    $('.tabs').tabs();
    $('select').formSelect();
    $('.modal').modal();

    /**/

    $('#labelregular').hide();
    $('#labelinscribiste').hide();
    $('#noway').hide();
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


    $(function(){
		$('#total').hide();
		$('#calcular').click(function() {
			total   = $('#total').val();

			/* fields */
		    job = $('#job');
			child = $('#child');
			beca = $('#beca');
		    aprobadas = $('#aprobadas').val();
		    regular = $( "#regular" ).val();
		    inscribiste = $( "#inscribiste" ).val();
		    promedio = $( "#promedio" ).val();


	        if ( job.is(':checked') ) {
	        	job = 1 * 0.2;
	        } else {
	        	job = 0;
	        }

	        if ( child.is(':checked') ) {
	        	child = 1 * 0.2;
	        } else {
	        	child = 0;
	        }

	        if ( beca.is(':checked') ) {
	        	beca = 1 * 0.1;
	        } else {
	        	beca = 0;
	        }
			
			//console.log(job +' + '+ child +' + (0.0063 * '+aprobadas+') + (0.03 * '+regular+') + (0.01*'+promedio+') + (('+regular+' / '+inscribiste+') * 0.3)');

			total = beca + job + child + (aprobadas * 0.2/41) + (0.01*promedio)+  (regular * 0.2/3);

			//total = job + child + (0.0063*aprobadas) + (0.03*regular) + (0.01*promedio) + ((regular/inscribiste)*0.3);

			total = Math.floor(total * 1000) / 1000;

			//console.log('total '+total);

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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });
  