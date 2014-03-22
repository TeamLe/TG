require 'test_helper'

class CourseDescriptionsControllerTest < ActionController::TestCase
  setup do
    @course_description = course_descriptions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:course_descriptions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create course_description" do
    assert_difference('CourseDescription.count') do
      post :create, course_description: { code: @course_description.code, name: @course_description.name }
    end

    assert_redirected_to course_description_path(assigns(:course_description))
  end

  test "should show course_description" do
    get :show, id: @course_description
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @course_description
    assert_response :success
  end

  test "should update course_description" do
    patch :update, id: @course_description, course_description: { code: @course_description.code, name: @course_description.name }
    assert_redirected_to course_description_path(assigns(:course_description))
  end

  test "should destroy course_description" do
    assert_difference('CourseDescription.count', -1) do
      delete :destroy, id: @course_description
    end

    assert_redirected_to course_descriptions_path
  end
end
