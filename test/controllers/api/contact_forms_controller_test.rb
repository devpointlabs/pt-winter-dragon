require 'test_helper'

class Api::ContactFormsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_contact_forms_index_url
    assert_response :success
  end

  test "should get show" do
    get api_contact_forms_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_contact_forms_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_contact_forms_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_contact_forms_destroy_url
    assert_response :success
  end

end
