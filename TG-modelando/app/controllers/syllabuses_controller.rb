class SyllabusesController < ApplicationController
  before_action :set_syllabus, only: [:show, :edit, :update, :destroy]

  # GET /syllabuses
  # GET /syllabuses.json
  def index
    @syllabuses = Syllabus.all
    @major = Major.find(params[:major_id])
  end

  # GET /syllabuses/1
  # GET /syllabuses/1.json
  def show
    respond_to do |format|
        format.json { render json: @syllabus, :include => { :courses => { :include => :course_description }}}
    end
  end

  # GET /syllabuses/new
  def new
    if (params[:major_id].present?)
      @major = Major.find(params[:major_id])
    end

    @syllabus = Syllabus.new
  end

  # GET /syllabuses/1/edit
  def edit
    @major = Major.find(params[:major_id])
  end

  # POST /syllabuses
  # POST /syllabuses.json
  def create
    @syllabus = Syllabus.new(syllabus_params)

    respond_to do |format|
      if @syllabus.save
        format.html { redirect_to majors_url, notice: 'Syllabus was successfully created.' }
        format.json { render action: 'show', status: :created, location: @syllabus }
      else
        format.html { render action: 'new' }
        format.json { render json: @syllabus.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /syllabuses/1
  # PATCH/PUT /syllabuses/1.json
  def update
    respond_to do |format|
      if @syllabus.update(syllabus_params)
        format.html { redirect_to @syllabus, notice: 'Syllabus was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @syllabus.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /syllabuses/1
  # DELETE /syllabuses/1.json
  def destroy
    @syllabus.destroy
    respond_to do |format|
      format.html { redirect_to syllabuses_url }
      format.json { head :no_content }
    end
  end

  def change
    operation = params[:operation]
    course_id = params[:course_id]

    @syllabus = Syllabus.find(params[:syllabus_id])
    @major = Major.find(params[:major_id])
    course = Course.find(course_id)

    courses_same_period = @syllabus.courses.where('column == ?', course.column)

    if operation.eql?('up')
      new_row = course.row - 1

      found_course_with_same_position = nil
      courses_same_period.each  do |course_same_period|
        if course_same_period.row.eql?(new_row)
          found_course_with_same_position = course_same_period
        end
      end

      if (!found_course_with_same_position.nil?)
        found_course_with_same_position.row = new_row + 1
        course.row = new_row
        found_course_with_same_position.save
        course.save
      end


    elsif operation.eql?('down')
            new_row = course.row + 1

      found_course_with_same_position = nil
      courses_same_period.each  do |course_same_period|
        if course_same_period.row.eql?(new_row)
          found_course_with_same_position = course_same_period
        end
      end

      if (!found_course_with_same_position.nil?)
        found_course_with_same_position.row = new_row - 1
        course.row = new_row
        found_course_with_same_position.save
        course.save
      end
    end

    respond_to do |format|
        format.json { render json: @syllabus, :include => { :courses => { :include => :course_description }}}
    end


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_syllabus
      @syllabus = Syllabus.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def syllabus_params
      params[:syllabus].permit(:operation)
    end
end
