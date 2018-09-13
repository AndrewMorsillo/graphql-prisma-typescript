import { GraphQLResolveInfo } from 'graphql'

export interface ITypeMap {
  Context: any
  PAYMENT_PROVIDER: any
  PLACE_SIZES: any
  NOTIFICATION_TYPE: any
  CURRENCY: any
  MutationType: any

  QueryParent: any
  MutationParent: any
  SubscriptionParent: any
  ViewerParent: any
  AuthPayloadParent: any
  MutationResultParent: any
  ExperiencesByCityParent: any
  HomeParent: any
  ReservationParent: any
  ExperienceParent: any
  ReviewParent: any
  NeighbourhoodParent: any
  LocationParent: any
  PictureParent: any
  CityParent: any
  ExperienceCategoryParent: any
  UserParent: any
  PaymentAccountParent: any
  PlaceParent: any
  BookingParent: any
  NotificationParent: any
  PaymentParent: any
  PaypalInformationParent: any
  CreditCardInformationParent: any
  MessageParent: any
  PricingParent: any
  PlaceViewsParent: any
  GuestRequirementsParent: any
  PoliciesParent: any
  HouseRulesParent: any
  AmenitiesParent: any
  CitySubscriptionPayloadParent: any
  CityPreviousValuesParent: any
}

export namespace QueryResolvers {
  export type TopExperiencesResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][]

  export type TopHomesResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HomeParent'][]

  export interface ArgsHomesInPriceRange {
    min: number
    max: number
  }

  export type HomesInPriceRangeResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsHomesInPriceRange,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HomeParent'][]

  export type TopReservationsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReservationParent'][]

  export type FeaturedDestinationsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NeighbourhoodParent'][]

  export interface ArgsExperiencesByCity {
    cities: string[]
  }

  export type ExperiencesByCityResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsExperiencesByCity,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperiencesByCityParent'][]

  export type ViewerResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ViewerParent'] | null

  export type MyLocationResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | null

  export interface Resolver<T extends ITypeMap> {
    topExperiences: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][]
    topHomes: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HomeParent'][]
    homesInPriceRange: (
      parent: T['QueryParent'],
      args: ArgsHomesInPriceRange,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HomeParent'][]
    topReservations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReservationParent'][]
    featuredDestinations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NeighbourhoodParent'][]
    experiencesByCity: (
      parent: T['QueryParent'],
      args: ArgsExperiencesByCity,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperiencesByCityParent'][]
    viewer: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ViewerParent'] | null
    myLocation: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | null
  }
}

export namespace MutationResolvers {
  export interface ArgsSignup {
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
  }

  export type SignupResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsSignup,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent']

  export interface ArgsLogin {
    email: string
    password: string
  }

  export type LoginResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent']

  export interface ArgsAddPaymentMethod {
    cardNumber: string
    expiresOnMonth: number
    expiresOnYear: number
    securityCode: string
    firstName: string
    lastName: string
    postalCode: string
    country: string
  }

  export type AddPaymentMethodResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddPaymentMethod,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent']

  export interface ArgsBook {
    placeId: string
    checkIn: string
    checkOut: string
    numGuests: number
  }

  export type BookResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsBook,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent']

  export interface ArgsAddLocationToUser {
    location: T['LocationCreateInputParent'] | null
  }

  export type AddLocationToUserResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddLocationToUser,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent'] | null

  export interface Resolver<T extends ITypeMap> {
    signup: (
      parent: T['MutationParent'],
      args: ArgsSignup,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent']
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent']
    addPaymentMethod: (
      parent: T['MutationParent'],
      args: ArgsAddPaymentMethod,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent']
    book: (
      parent: T['MutationParent'],
      args: ArgsBook,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent']
    addLocationToUser: (
      parent: T['MutationParent'],
      args: ArgsAddLocationToUser,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent'] | null
  }
}

export namespace SubscriptionResolvers {
  export type CityResolver<T extends ITypeMap> = (
    parent: T['SubscriptionParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CitySubscriptionPayloadParent'] | null

  export interface Resolver<T extends ITypeMap> {
    city: (
      parent: T['SubscriptionParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CitySubscriptionPayloadParent'] | null
  }
}

export namespace ViewerResolvers {
  export type MeResolver<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent']

  export type BookingsResolver<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][]

  export interface Resolver<T extends ITypeMap> {
    me: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent']
    bookings: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][]
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type UserResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent']

  export interface Resolver<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent']
  }
}

export namespace MutationResultResolvers {
  export type SuccessResolver<T extends ITypeMap> = (
    parent: T['MutationResultParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export interface Resolver<T extends ITypeMap> {
    success: (
      parent: T['MutationResultParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
  }
}

export namespace ExperiencesByCityResolvers {
  export type ExperiencesResolver<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][]

  export type CityResolver<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent']

  export interface Resolver<T extends ITypeMap> {
    experiences: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][]
    city: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent']
  }
}

export namespace HomeResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NameResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NumRatingsResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type AvgRatingResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export interface ArgsPictures {
    first: number | null
  }

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: ArgsPictures,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][]

  export type PerNightResolver<T extends ITypeMap> = (
    parent: T['HomeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    name: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null
    description: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    numRatings: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    avgRating: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    pictures: (
      parent: T['HomeParent'],
      args: ArgsPictures,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][]
    perNight: (
      parent: T['HomeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace ReservationResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type AvgPricePerPersonResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][]

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent']

  export type IsCuratedResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    title: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    avgPricePerPerson: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    pictures: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][]
    location: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent']
    isCurated: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    slug: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    popularity: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace ExperienceResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type CategoryResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceCategoryParent'] | null

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent']

  export type PricePerPersonResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReviewParent'][]

  export type PreviewResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent']

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    category: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceCategoryParent'] | null
    title: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    location: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent']
    pricePerPerson: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    reviews: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReviewParent'][]
    preview: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent']
    popularity: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace ReviewResolvers {
  export type AccuracyResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CheckInResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CleanlinessResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CommunicationResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type StarsResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type TextResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type ValueResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    accuracy: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    checkIn: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    cleanliness: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    communication: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    createdAt: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    location: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    stars: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    text: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    value: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace NeighbourhoodResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NameResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type HomePreviewResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | null

  export type CityResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent']

  export type FeaturedResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    name: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    slug: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    homePreview: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | null
    city: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent']
    featured: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    popularity: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace LocationResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LatResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type LngResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type AddressResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null

  export type DirectionsResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    lat: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    lng: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    address: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null
    directions: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null
  }
}

export namespace PictureResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type UrlResolver<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    url: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace CityResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NameResolver<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    name: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace ExperienceCategoryResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type MainColorResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NameResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type ExperienceResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'] | null

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    mainColor: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    name: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    experience: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'] | null
  }
}

export namespace UserResolvers {
  export type BookingsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][]

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type HostingExperiencesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][]

  export type IdResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IsSuperHostResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | null

  export type NotificationsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NotificationParent'][]

  export type OwnedPlacesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'][]

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent'][] | null

  export type PhoneResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type ProfilePictureResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | null

  export type ReceivedMessagesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MessageParent'][]

  export type ResponseRateResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type ResponseTimeResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type SentMessagesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MessageParent'][]

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type TokenResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    bookings: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][]
    createdAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    email: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    firstName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    hostingExperiences: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][]
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    isSuperHost: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    lastName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    location: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | null
    notifications: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NotificationParent'][]
    ownedPlaces: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'][]
    paymentAccount: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent'][] | null
    phone: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    profilePicture: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | null
    receivedMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MessageParent'][]
    responseRate: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    responseTime: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    sentMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MessageParent'][]
    updatedAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    token: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace PaymentAccountResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PAYMENT_PROVIDER'] | null

  export type UserResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent']

  export type PaymentsResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentParent'][]

  export type PaypalResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaypalInformationParent'] | null

  export type CreditcardResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CreditCardInformationParent'] | null

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    createdAt: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    type: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PAYMENT_PROVIDER'] | null
    user: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent']
    payments: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentParent'][]
    paypal: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaypalInformationParent'] | null
    creditcard: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CreditCardInformationParent'] | null
  }
}

export namespace PlaceResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NameResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null

  export type SizeResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PLACE_SIZES'] | null

  export type ShortDescriptionResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type MaxGuestsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type NumBedroomsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type NumBedsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type NumBathsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReviewParent'][]

  export type AmenitiesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AmenitiesParent']

  export type HostResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent']

  export type PricingResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PricingParent']

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent']

  export type ViewsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceViewsParent']

  export type GuestRequirementsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['GuestRequirementsParent'] | null

  export type PoliciesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PoliciesParent'] | null

  export type HouseRulesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HouseRulesParent'] | null

  export type BookingsResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][]

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][]

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    name: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null
    size: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PLACE_SIZES'] | null
    shortDescription: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    description: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    slug: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    maxGuests: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    numBedrooms: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    numBeds: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    numBaths: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    reviews: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReviewParent'][]
    amenities: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AmenitiesParent']
    host: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent']
    pricing: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PricingParent']
    location: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent']
    views: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceViewsParent']
    guestRequirements: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['GuestRequirementsParent'] | null
    policies: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PoliciesParent'] | null
    houseRules: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HouseRulesParent'] | null
    bookings: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][]
    pictures: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][]
    popularity: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace BookingResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type BookeeResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent']

  export type PlaceResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent']

  export type StartDateResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type EndDateResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type PaymentResolver<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentParent']

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    createdAt: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    bookee: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent']
    place: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent']
    startDate: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    endDate: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    payment: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentParent']
  }
}

export namespace NotificationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LinkResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type ReadDateResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NOTIFICATION_TYPE'] | null

  export type UserResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent']

  export interface Resolver<T extends ITypeMap> {
    createdAt: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    link: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    readDate: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    type: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NOTIFICATION_TYPE'] | null
    user: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent']
  }
}

export namespace PaymentResolvers {
  export type BookingResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent']

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type PaymentMethodResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent']

  export type ServiceFeeResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    booking: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent']
    createdAt: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    paymentMethod: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent']
    serviceFee: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace PaypalInformationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent']

  export interface Resolver<T extends ITypeMap> {
    createdAt: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    email: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    paymentAccount: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent']
  }
}

export namespace CreditCardInformationResolvers {
  export type CardNumberResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type CountryResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type ExpiresOnMonthResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type ExpiresOnYearResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent'] | null

  export type PostalCodeResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type SecurityCodeResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    cardNumber: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    country: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    createdAt: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    expiresOnMonth: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    expiresOnYear: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    firstName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    lastName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    paymentAccount: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent'] | null
    postalCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    securityCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace MessageResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type DeliveredAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type ReadAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    createdAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    deliveredAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    readAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace PricingResolvers {
  export type AverageMonthlyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type AverageWeeklyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type BasePriceResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CleaningFeeResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type CurrencyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CURRENCY'] | null

  export type ExtraGuestsResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type MonthlyDiscountResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type PerNightResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type SecurityDepositResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type SmartPricingResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type WeekendPricingResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export type WeeklyDiscountResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null

  export interface Resolver<T extends ITypeMap> {
    averageMonthly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    averageWeekly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    basePrice: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    cleaningFee: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    currency: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CURRENCY'] | null
    extraGuests: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    id: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    monthlyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    perNight: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    securityDeposit: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    smartPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    weekendPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
    weeklyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null
  }
}

export namespace PlaceViewsResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PlaceViewsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type LastWeekResolver<T extends ITypeMap> = (
    parent: T['PlaceViewsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['PlaceViewsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    lastWeek: (
      parent: T['PlaceViewsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
  }
}

export namespace GuestRequirementsResolvers {
  export type GovIssuedIdResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type GuestTripInformationResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type IdResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type RecommendationsFromOtherHostsResolver<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export interface Resolver<T extends ITypeMap> {
    govIssuedId: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    guestTripInformation: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    id: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    recommendationsFromOtherHosts: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
  }
}

export namespace PoliciesResolvers {
  export type CheckInEndTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CheckInStartTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CheckoutTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    checkInEndTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    checkInStartTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    checkoutTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number
    createdAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    updatedAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace HouseRulesResolvers {
  export type AdditionalRulesResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IdResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type PartiesAndEventsAllowedResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null

  export type PetsAllowedResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null

  export type SmokingAllowedResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null

  export type SuitableForChildrenResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null

  export type SuitableForInfantsResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    additionalRules: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null
    createdAt: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    id: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    partiesAndEventsAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null
    petsAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null
    smokingAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null
    suitableForChildren: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null
    suitableForInfants: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null
    updatedAt: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export namespace AmenitiesResolvers {
  export type AirConditioningResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type BabyBathResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type BabyMonitorResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type BabysitterRecommendationsResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type BathtubResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type BreakfastResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type BuzzerWirelessIntercomResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type CableTvResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type ChangingTableResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type ChildrensBooksAndToysResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type ChildrensDinnerwareResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type CribResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type DoormanResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type DryerResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type ElevatorResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type EssentialsResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type FamilyKidFriendlyResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type FreeParkingOnPremisesResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type FreeParkingOnStreetResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type GymResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type HairDryerResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type HangersResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type HeatingResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type HotTubResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type IdResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type IndoorFireplaceResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type InternetResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type IronResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type KitchenResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type LaptopFriendlyWorkspaceResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type PaidParkingOffPremisesResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type PetsAllowedResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type PoolResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type PrivateEntranceResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type ShampooResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type SmokingAllowedResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type SuitableForEventsResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type TvResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type WasherResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type WheelchairAccessibleResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export type WirelessInternetResolver<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean

  export interface Resolver<T extends ITypeMap> {
    airConditioning: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    babyBath: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    babyMonitor: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    babysitterRecommendations: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    bathtub: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    breakfast: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    buzzerWirelessIntercom: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    cableTv: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    changingTable: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    childrensBooksAndToys: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    childrensDinnerware: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    crib: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    doorman: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    dryer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    elevator: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    essentials: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    familyKidFriendly: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    freeParkingOnPremises: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    freeParkingOnStreet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    gym: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    hairDryer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    hangers: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    heating: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    hotTub: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    id: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    indoorFireplace: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    internet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    iron: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    kitchen: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    laptopFriendlyWorkspace: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    paidParkingOffPremises: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    petsAllowed: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    pool: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    privateEntrance: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    shampoo: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    smokingAllowed: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    suitableForEvents: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    tv: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    washer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    wheelchairAccessible: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
    wirelessInternet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean
  }
}

export namespace CitySubscriptionPayloadResolvers {
  export type MutationResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationType']

  export type NodeResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | null

  export type UpdatedFieldsResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string[]

  export type PreviousValuesResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityPreviousValuesParent'] | null

  export interface Resolver<T extends ITypeMap> {
    mutation: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationType']
    node: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | null
    updatedFields: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string[]
    previousValues: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityPreviousValuesParent'] | null
  }
}

export namespace CityPreviousValuesResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export type NameResolver<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string

  export interface Resolver<T extends ITypeMap> {
    id: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
    name: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: IQuery.Resolver<T>
  Mutation: IMutation.Resolver<T>
  Subscription: ISubscription.Resolver<T>
  Viewer: IViewer.Resolver<T>
  AuthPayload: IAuthPayload.Resolver<T>
  MutationResult: IMutationResult.Resolver<T>
  ExperiencesByCity: IExperiencesByCity.Resolver<T>
  Home: IHome.Resolver<T>
  Reservation: IReservation.Resolver<T>
  Experience: IExperience.Resolver<T>
  Review: IReview.Resolver<T>
  Neighbourhood: INeighbourhood.Resolver<T>
  Location: ILocation.Resolver<T>
  Picture: IPicture.Resolver<T>
  City: ICity.Resolver<T>
  ExperienceCategory: IExperienceCategory.Resolver<T>
  User: IUser.Resolver<T>
  PaymentAccount: IPaymentAccount.Resolver<T>
  Place: IPlace.Resolver<T>
  Booking: IBooking.Resolver<T>
  Notification: INotification.Resolver<T>
  Payment: IPayment.Resolver<T>
  PaypalInformation: IPaypalInformation.Resolver<T>
  CreditCardInformation: ICreditCardInformation.Resolver<T>
  Message: IMessage.Resolver<T>
  Pricing: IPricing.Resolver<T>
  PlaceViews: IPlaceViews.Resolver<T>
  GuestRequirements: IGuestRequirements.Resolver<T>
  Policies: IPolicies.Resolver<T>
  HouseRules: IHouseRules.Resolver<T>
  Amenities: IAmenities.Resolver<T>
  CitySubscriptionPayload: ICitySubscriptionPayload.Resolver<T>
  CityPreviousValues: ICityPreviousValues.Resolver<T>
}
