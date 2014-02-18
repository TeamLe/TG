class MatrixController < ApplicationController

	def change
	banana = "oi"

	respond_to do |format|
	  format.html # change.html.erb
	  format.json { render :json => {"banana" => "coco"} }
	end
		
	end
end
