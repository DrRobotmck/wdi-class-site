class StudentsController < ApplicationController

  def index

  end
  def show
    @students = Student.find(params[:id])
    respond_to do |format|
      format.html {render nothing: true}
      format.json { render json: @students}
    end
  end

  def new
  	@student = Student.new
  end
  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to root_path
    else
      render :new
    end
  end

private

  def student_params
    params.require(:student).permit(:name,:email,:website,:github,:twitter,:linkedin,:blurb)
  end

end
