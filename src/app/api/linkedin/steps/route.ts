// app/api/linkedin/route.ts

import { NextResponse } from 'next/server';

 

const steps = {
    "success": true,
    "message": "Cookie extraction steps with all platforms are successful",
    "total": 1,
    "data": [
      {
        "_id": "622f03eb770f6bba0b8facaa",
        "name": "LinkedIn",
        "cookieExtractionSteps": {
          "cookieDomain": "https://www.linkedin.com/",
          "websiteUrl": "https://www.linkedin.com/",
          "cookies": [
            {
              "name": "li_at"
            },
            {
              "name": "JSESSIONID"
            },
            {
              "name": "bcookie"
            },
            {
              "name": "liap"
            },
            {
              "name": "li_theme_set"
            },
            {
              "name": "li_theme"
            },
            {
              "name": "timezone"
            },
            {
              "name": "bscookie"
            }
          ],
          "headers": [
            {
              "name": "csrf-token",
              "value": "{{inputs.csrf-token}}"
            },
            {
              "name": "User-Agent",
              "value": "{{inputs.user-agent}}"
            },
            {
              "name": "x-li-track",
              "value": "{\"clientVersion\":\"1.13.455\",\"mpVersion\":\"1.13.455\",\"osName\":\"web\",\"timezoneOffset\":{{inputs.timezoneOffset}},\"timezone\":\"{{inputs.timezone}}\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1920,\"displayHeight\":1080}"
            },
            {
              "name": "x-li-lang",
              "value": "en_US"
            },
            {
              "name": "X-Restli-Protocol-Version",
              "value": "2.0.0"
            }
          ],
          "preWork": [
            {
              "step": "getUserAgent",
              "storeIn": "user-agent"
            },
            {
              "step": "getTimeZoneOffset",
              "storeIn": "timezoneOffset"
            },
            {
              "step": "createCopy",
              "from": "JSESSIONID",
              "saveAs": "csrf-token"
            },
            {
              "step": "slice",
              "applyOn": "csrf-token",
              "resource": {
                "start": 1,
                "end": -1
              }
            },
            {
              "step": "slice",
              "applyOn": "JSESSIONID",
              "resource": {
                "start": 1,
                "end": -1
              }
            },
            {
              "step": "slice",
              "applyOn": "bscookie",
              "resource": {
                "start": 1,
                "end": -1
              }
            },
            {
              "step": "slice",
              "applyOn": "bcookie",
              "resource": {
                "start": 1,
                "end": -1
              }
            }
          ],
          "mainCalls": {
            "calls": [
              {
                "api": {
                  "url": "https://www.linkedin.com/voyager/api/me",
                  "method": "GET",
                  "headers": {
                    "Accept-Language": "en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                    "x-li-lang": "en_US",
                    "x-restli-protocol-version": "2.0.0",
                    "x-li-track": "{\"clientVersion\":\"1.13.455\",\"mpVersion\":\"1.13.455\",\"osName\":\"web\",\"timezoneOffset\":{{inputs.timezoneOffset}},\"timezone\":\"{{inputs.timezone}}\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1920,\"displayHeight\":1080}",
                    "csrf-token": "{{inputs.csrf-token}}",
                    "Cookie": "li_at={{inputs.li_at}};JSESSIONID={{inputs.JSESSIONID}}",
                    "User-Agent": "{{inputs.user-agent}}"
                  }
                }
              }
            ]
          },
          "postWork": [
            {
              "step": "store",
              "source": "mainCalls;0;{{$.miniProfile.publicIdentifier}}",
              "saveAs": "profileId"
            }
          ],
          "metadata": [
            {
              "step": "store",
              "source": "mainCalls;0;{{$.premiumSubscriber}}",
              "saveAs": "isPremium"
            }
          ],
          "sources": {
            "name": "mainCalls;0;{{$.miniProfile.firstName}} {{$.miniProfile.lastName}}",
            "profileUrl": "mainCalls;0;https://www.linkedin.com/in/{{$.miniProfile.publicIdentifier}}/",
            "profilePicUrl": "mainCalls;0;{{$.miniProfile.picture['com.linkedin.common.VectorImage'].rootUrl}}{{$.miniProfile.picture['com.linkedin.common.VectorImage'].artifacts[3].fileIdentifyingUrlPathSegment}}"
          },
          "variables": {
            "preCalls": [
              {
                "api": {
                  "url": "https://www.linkedin.com/voyager/api/identity/profiles/{{inputs.profileId}}/profileView",
                  "method": "GET",
                  "headers": {
                    "Accept-Language": "en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                    "x-li-lang": "en_US",
                    "x-restli-protocol-version": "2.0.0",
                    "x-li-track": "{\"clientVersion\":\"1.13.455\",\"mpVersion\":\"1.13.455\",\"osName\":\"web\",\"timezoneOffset\":{{inputs.timezoneOffset}},\"timezone\":\"{{inputs.timezone}}\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1920,\"displayHeight\":1080}",
                    "csrf-token": "{{inputs.csrf-token}}",
                    "Cookie": "li_at={{inputs.li_at}};JSESSIONID={{inputs.JSESSIONID}}",
                    "User-Agent": "{{inputs.user-agent}}"
                  }
                }
              }
            ],
            "data": [
              {
                "name": "yourFirstName",
                "value": "variablePreCall;0;{{$.profile.firstName}}"
              },
              {
                "name": "yourLastName",
                "value": "variablePreCall;0;{{$.profile.lastName}}"
              },
              {
                "name": "yourJobTitle",
                "value": "variablePreCall;0;{{$.positionView.elements[0].title}}"
              },
              {
                "name": "yourCompanyName",
                "value": "variablePreCall;0;{{$.positionView.elements[0].companyName}}"
              }
            ]
          },
          "postImport": [
            {
              "preCall": [
                {
                  "api": {
                    "url": "https://www.linkedin.com/voyager/api/voyagerPremiumDashFeatureAccess?ids=List(urn%3Ali%3Afsd_featureAccess%3ACAN_ACCESS_RECRUITER_ENTRY_POINT)",
                    "method": "GET",
                    "headers": {
                      "Accept-Language": "en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                      "x-li-lang": "en_US",
                      "x-restli-protocol-version": "2.0.0",
                      "x-li-track": "{\"clientVersion\":\"1.13.455\",\"mpVersion\":\"1.13.455\",\"osName\":\"web\",\"timezoneOffset\":{{inputs.timezoneOffset}},\"timezone\":\"{{inputs.timezone}}\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1920,\"displayHeight\":1080}",
                      "csrf-token": "{{inputs.csrf-token}}",
                      "Cookie": "li_at={{inputs.li_at}};JSESSIONID={{inputs.JSESSIONID}}",
                      "User-Agent": "{{inputs.user-agent}}"
                    }
                  }
                }
              ],
              "comparision": {
                "from": "postImportPreCalls;0;{{$.results['urn:li:fsd_featureAccess:CAN_ACCESS_RECRUITER_ENTRY_POINT'].hasAccess}}",
                "to": "true"
              },
              "checkCookie": {
                "domain": "https://www.linkedin.com/",
                "cookie": "li_a"
              },
              "errorMessage": "We have detected that you have a Recruiter account. To ensure automatic sync, please open LinkedIn Recruiter in a new page first then click the 'Add Account' button once.",
              "triggerNextImportFor": [
                "6541d862e7e500bea9c8b645"
              ]
            },
            {
              "preCall": [
                {
                  "api": {
                    "url": "https://www.linkedin.com/voyager/api/voyagerPremiumDashFeatureAccess?ids=List(urn%3Ali%3Afsd_featureAccess%3ACAN_ACCESS_SALES_NAV_ENTRY_POINT)",
                    "method": "GET",
                    "headers": {
                      "Accept-Language": "en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
                      "x-li-lang": "en_US",
                      "x-restli-protocol-version": "2.0.0",
                      "x-li-track": "{\"clientVersion\":\"1.13.455\",\"mpVersion\":\"1.13.455\",\"osName\":\"web\",\"timezoneOffset\":{{inputs.timezoneOffset}},\"timezone\":\"{{inputs.timezone}}\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1920,\"displayHeight\":1080}",
                      "csrf-token": "{{inputs.csrf-token}}",
                      "Cookie": "li_at={{inputs.li_at}};JSESSIONID={{inputs.JSESSIONID}}",
                      "User-Agent": "{{inputs.user-agent}}"
                    }
                  }
                }
              ],
              "comparision": {
                "from": "postImportPreCalls;0;{{$.results['urn:li:fsd_featureAccess:CAN_ACCESS_SALES_NAV_ENTRY_POINT'].hasAccess}}",
                "to": "true"
              },
              "checkCookie": {
                "domain": "https://www.linkedin.com/",
                "cookie": "li_a"
              },
              "errorMessage": "We have detected that you have a Sales Navigator account. To ensure automatic sync, please open Sales Navigator in a new page first then click the 'Add Account' button once.",
              "triggerNextImportFor": [
                "64267ae1dbfc2b4d1fa6628d"
              ]
            }
          ]
        }
      }
    ]
  }
  
export async function GET() {
    // would uncomment later after i figure auth out not a massive priority
//   const user = await currentUser();
//   if (!user) return new NextResponse('Unauthorized', { status: 401 });

//   const userData = await prisma.user.findUnique({
//     where: { clerkId: user.id },
//   });
//   if (!userData) return new NextResponse('User not found', { status: 404 });

  // Return the saved tokens
  return NextResponse.json(steps);
}
