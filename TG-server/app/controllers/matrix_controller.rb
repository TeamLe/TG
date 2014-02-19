class MatrixController < ApplicationController

	def change
	
	color = "red"

	if !params[:color].nil? && !params[:color].empty?
		color = params[:color]
		puts color
		if color.eql?("#ff0000")
			color = "#00ff00"
		elsif color.eql?("#00ff00")
			color = "#0000ff"
		elsif color.eql?("#0000ff")
			color = "#000000"			
		elsif color.eql?("#000000")
			color = "#ff0000"			
		end

	end 

	respond_to do |format|
	  format.html # change.html.erb
	  format.json { render :json => {color: color, matrix_id: params[:matrix_id]} }
	end
		
	end
end
