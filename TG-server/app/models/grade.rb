class Grade < ActiveRecord::Base
	symbolize :status, :in => 
	{
		:enrolled => "Matriculado",
		:approved => "Aprovado",
		:failed => "Reprovado",
		:none => "Nenhum"
	}, :allow_blank => false, :scopes => true
end
