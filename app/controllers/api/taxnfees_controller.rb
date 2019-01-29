class Api::TaxnfeesController < ApplicationController
  before_action :set_taxnfee, only: [:show, :update, :destroy]

    def index
        render json: Taxnfee.all

    end
  
    def show
        render json: @taxnfee
    end

    def create
        taxnfee = Taxnfee.new(taxnfee_params)
  
        if taxnfee.save
            render json: taxnfee
        else
            render json: taxnfee.errors, status: 422
        end
    end
  
    def update
      if @taxnfee.update(taxnfee_params)
          render json: @taxnfee
        else
          render json: @taxnfee.errors, status: 422
        end
    end
  
    def destroy
        @taxnfee.destroy
    end
  

    private
  
    def set_taxnfee
      @taxnfee = Taxnfee.find(params[:id])
    end
  
    def taxnfee_params
      params.require(:taxnfee).permit(:tax, :delivery)
    end

end
