'use strict';

var Office = require( '../../page_objects/page_office.js' );

describe( 'The CFPB Ombudsman Office Page', function() {
  var page;

  beforeEach( function() {
    page = new Office();
    page.get( 'CFPBOmbudsman' );
  } );

  it( 'should properly load in a browser', function() {
    expect( page.pageTitle() ).toBe( 'CFPB Ombudsman' );
  } );

  it( 'should include main title', function() {
    expect( page.mainTitle.getText() ).toBe( 'CFPB Ombudsman' );
  } );

  it( 'should include intro text', function() {
    expect( page.introText.getText() ).toContain( 'CFPB Ombudsman' );
  } );

  it( 'should NOT include subscription', function() {
    expect( page.subscription.isPresent() ).toBe( false );
  } );

  it( 'should include top story head', function() {
    expect( page.topStoryHead.getText() ).toBe( 'Our Role' );
  } );

  it( 'should NOT include top story description', function() {
    expect( page.topStoryDesc.getText() ).toContain( 'ombudsman principles' );
  } );

  it( 'should NOT include top story link', function() {
    expect( page.topStoryLink.isPresent() ).toBe( false );
  } );

  it( 'should NOT have resource image', function() {
    expect( page.resourceImg.isPresent() ).toBe( false );
  } );

  it( 'should NOT have resource title', function() {
    expect( page.resourceTitle.isPresent() ).toBe( false );
  } );

  it( 'should NOT have resource description', function() {
    expect( page.resourceDesc.isPresent() ).toBe( false );
  } );

  it( 'should NOT have resource link', function() {
    expect( page.resourceLink.isPresent() ).toBe( false );
  } );

  it( 'should have subpages', function() {
    expect( page.subpages.isPresent() ).toBe( true );
  } );

  it( 'should NOT have office content', function() {
    expect( page.officeContent.isPresent() ).toBe( false );
  } );

  it( 'should NOT have office tags', function() {
    expect( page.officeTags.isPresent() ).toBe( false );
  } );

  it( 'should have office contacts', function() {
    expect( page.officeContact.isPresent() ).toBe( true );
  } );
} );