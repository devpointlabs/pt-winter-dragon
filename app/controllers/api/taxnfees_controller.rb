class Api::TaxnfeesController < ApplicationController
<<<<<<< HEAD

    before_action :set_taxnfee, only: [:show, :update, :destroy]

    def index
        # render json: Taxnfee.find(7)
=======
  before_action :set_taxnfee, only: [:show, :update, :destroy]

    def index
>>>>>>> f2f806631f001e14ec736e4868f594318743fffd
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
<<<<<<< HEAD
        if @taxnfee.update(taxnfee_params)
            render json: @taxnfee
          else
            render json: @taxnfee.errors, status: 422
          end
=======
      if @taxnfee.update(taxnfee_params)
          render json: @taxnfee
        else
          render json: @taxnfee.errors, status: 422
        end
>>>>>>> f2f806631f001e14ec736e4868f594318743fffd
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

<<<<<<< HEAD


=======
>>>>>>> f2f806631f001e14ec736e4868f594318743fffd
end
