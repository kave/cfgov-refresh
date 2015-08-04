'use strict';

var SubPage = require( '../../page_objects/page_sub-pages.js' );

describe( "The Accessibility Office's " +
          'Submit An Accommodation Request Sub-Page', function() {
  var page;

  beforeEach( function() {
    page = new SubPage();
    page.get( 'SubmitAnAccommodationRequest' );
  } );

  it( 'should properly load in a browser', function() {
    expect( page.pageTitle() ).toBe( 'Submit an Accommodation Request' );
  } );

  it( 'should include page content', function() {
    expect( page.pageContent.getText() ).toContain( 'CFPB seeks to ensure' );
  } );

  it( 'should NOT include related link', function() {
    expect( page.relatedLink.isPresent() ).toBe( false );
  } );

  it( 'should NOT include a form', function() {
    expect( page.contentForm.isPresent() ).toBe( false );
  } );

  it( 'should include content markup', function() {
    expect( page.contentMarkup.isPresent() ).toBe( true );
  } );

  it( 'should NOT have subpages', function() {
    expect( page.subpages.isPresent() ).toBe( false );
  } );

  it( 'should NOT have related FAQ', function() {
    expect( page.relatedFAQ.isPresent() ).toBe( false );
  } );

  it( 'should NOT have related FAQ', function() {
    expect( page.relatedFAQ.isPresent() ).toBe( false );
  } );

  it( 'should NOT have tags', function() {
    expect( page.contentTags.isPresent() ).toBe( false );
  } );

  it( 'should have office contacts', function() {
    expect( page.officeContact.isPresent() ).toBe( true );
    expect( page.officeContactEmail.getText() )
      .toBe( 'CFPB_Accessibility@consumerfinance.gov' );
    expect( page.officeContactEmail.getAttribute( 'href' ) )
      .toBe( 'mailto:CFPB_Accessibility@consumerfinance.gov' );
  } );
} );