require 'test_helper'

class Api::CategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_categories_index_url
    assert_response :success
  end

  test "should get show" do
    get api_categories_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_categories_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_categories_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_categories_destroy_url
    assert_response :success
  end

end
