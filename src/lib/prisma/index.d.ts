
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AnonymousUser
 * 
 */
export type AnonymousUser = $Result.DefaultSelection<Prisma.$AnonymousUserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Script
 * 
 */
export type Script = $Result.DefaultSelection<Prisma.$ScriptPayload>
/**
 * Model Voice
 * 
 */
export type Voice = $Result.DefaultSelection<Prisma.$VoicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anonymousUser`: Exposes CRUD operations for the **AnonymousUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnonymousUsers
    * const anonymousUsers = await prisma.anonymousUser.findMany()
    * ```
    */
  get anonymousUser(): Prisma.AnonymousUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.script`: Exposes CRUD operations for the **Script** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scripts
    * const scripts = await prisma.script.findMany()
    * ```
    */
  get script(): Prisma.ScriptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voice`: Exposes CRUD operations for the **Voice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voices
    * const voices = await prisma.voice.findMany()
    * ```
    */
  get voice(): Prisma.VoiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AnonymousUser: 'AnonymousUser',
    Project: 'Project',
    Script: 'Script',
    Voice: 'Voice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "anonymousUser" | "project" | "script" | "voice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AnonymousUser: {
        payload: Prisma.$AnonymousUserPayload<ExtArgs>
        fields: Prisma.AnonymousUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnonymousUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnonymousUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          findFirst: {
            args: Prisma.AnonymousUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnonymousUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          findMany: {
            args: Prisma.AnonymousUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>[]
          }
          create: {
            args: Prisma.AnonymousUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          createMany: {
            args: Prisma.AnonymousUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnonymousUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>[]
          }
          delete: {
            args: Prisma.AnonymousUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          update: {
            args: Prisma.AnonymousUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          deleteMany: {
            args: Prisma.AnonymousUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnonymousUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnonymousUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>[]
          }
          upsert: {
            args: Prisma.AnonymousUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          aggregate: {
            args: Prisma.AnonymousUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnonymousUser>
          }
          groupBy: {
            args: Prisma.AnonymousUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnonymousUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnonymousUserCountArgs<ExtArgs>
            result: $Utils.Optional<AnonymousUserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Script: {
        payload: Prisma.$ScriptPayload<ExtArgs>
        fields: Prisma.ScriptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScriptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScriptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          findFirst: {
            args: Prisma.ScriptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScriptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          findMany: {
            args: Prisma.ScriptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>[]
          }
          create: {
            args: Prisma.ScriptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          createMany: {
            args: Prisma.ScriptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScriptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>[]
          }
          delete: {
            args: Prisma.ScriptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          update: {
            args: Prisma.ScriptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          deleteMany: {
            args: Prisma.ScriptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScriptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScriptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>[]
          }
          upsert: {
            args: Prisma.ScriptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          aggregate: {
            args: Prisma.ScriptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScript>
          }
          groupBy: {
            args: Prisma.ScriptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScriptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScriptCountArgs<ExtArgs>
            result: $Utils.Optional<ScriptCountAggregateOutputType> | number
          }
        }
      }
      Voice: {
        payload: Prisma.$VoicePayload<ExtArgs>
        fields: Prisma.VoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          findFirst: {
            args: Prisma.VoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          findMany: {
            args: Prisma.VoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>[]
          }
          create: {
            args: Prisma.VoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          createMany: {
            args: Prisma.VoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>[]
          }
          delete: {
            args: Prisma.VoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          update: {
            args: Prisma.VoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          deleteMany: {
            args: Prisma.VoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>[]
          }
          upsert: {
            args: Prisma.VoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          aggregate: {
            args: Prisma.VoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoice>
          }
          groupBy: {
            args: Prisma.VoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    anonymousUser?: AnonymousUserOmit
    project?: ProjectOmit
    script?: ScriptOmit
    voice?: VoiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    scripts: number
    voices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    scripts?: boolean | UserCountOutputTypeCountScriptsArgs
    voices?: boolean | UserCountOutputTypeCountVoicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceWhereInput
  }


  /**
   * Count Type AnonymousUserCountOutputType
   */

  export type AnonymousUserCountOutputType = {
    projects: number
    scripts: number
    voices: number
  }

  export type AnonymousUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | AnonymousUserCountOutputTypeCountProjectsArgs
    scripts?: boolean | AnonymousUserCountOutputTypeCountScriptsArgs
    voices?: boolean | AnonymousUserCountOutputTypeCountVoicesArgs
  }

  // Custom InputTypes
  /**
   * AnonymousUserCountOutputType without action
   */
  export type AnonymousUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUserCountOutputType
     */
    select?: AnonymousUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnonymousUserCountOutputType without action
   */
  export type AnonymousUserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * AnonymousUserCountOutputType without action
   */
  export type AnonymousUserCountOutputTypeCountScriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
  }

  /**
   * AnonymousUserCountOutputType without action
   */
  export type AnonymousUserCountOutputTypeCountVoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    scripts: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scripts?: boolean | ProjectCountOutputTypeCountScriptsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountScriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
  }


  /**
   * Count Type VoiceCountOutputType
   */

  export type VoiceCountOutputType = {
    script: number
  }

  export type VoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    script?: boolean | VoiceCountOutputTypeCountScriptArgs
  }

  // Custom InputTypes
  /**
   * VoiceCountOutputType without action
   */
  export type VoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceCountOutputType
     */
    select?: VoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoiceCountOutputType without action
   */
  export type VoiceCountOutputTypeCountScriptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    joinedAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    scripts?: boolean | User$scriptsArgs<ExtArgs>
    voices?: boolean | User$voicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "joinedAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    scripts?: boolean | User$scriptsArgs<ExtArgs>
    voices?: boolean | User$voicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      scripts: Prisma.$ScriptPayload<ExtArgs>[]
      voices: Prisma.$VoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      joinedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scripts<T extends User$scriptsArgs<ExtArgs> = {}>(args?: Subset<T, User$scriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voices<T extends User$voicesArgs<ExtArgs> = {}>(args?: Subset<T, User$voicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly joinedAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.scripts
   */
  export type User$scriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    cursor?: ScriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * User.voices
   */
  export type User$voicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    where?: VoiceWhereInput
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    cursor?: VoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AnonymousUser
   */

  export type AggregateAnonymousUser = {
    _count: AnonymousUserCountAggregateOutputType | null
    _min: AnonymousUserMinAggregateOutputType | null
    _max: AnonymousUserMaxAggregateOutputType | null
  }

  export type AnonymousUserMinAggregateOutputType = {
    id: string | null
    joinedAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type AnonymousUserMaxAggregateOutputType = {
    id: string | null
    joinedAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type AnonymousUserCountAggregateOutputType = {
    id: number
    joinedAt: number
    updatedAt: number
    expiresAt: number
    _all: number
  }


  export type AnonymousUserMinAggregateInputType = {
    id?: true
    joinedAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type AnonymousUserMaxAggregateInputType = {
    id?: true
    joinedAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type AnonymousUserCountAggregateInputType = {
    id?: true
    joinedAt?: true
    updatedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type AnonymousUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnonymousUser to aggregate.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationInput | AnonymousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnonymousUsers
    **/
    _count?: true | AnonymousUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnonymousUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnonymousUserMaxAggregateInputType
  }

  export type GetAnonymousUserAggregateType<T extends AnonymousUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAnonymousUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnonymousUser[P]>
      : GetScalarType<T[P], AggregateAnonymousUser[P]>
  }




  export type AnonymousUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnonymousUserWhereInput
    orderBy?: AnonymousUserOrderByWithAggregationInput | AnonymousUserOrderByWithAggregationInput[]
    by: AnonymousUserScalarFieldEnum[] | AnonymousUserScalarFieldEnum
    having?: AnonymousUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnonymousUserCountAggregateInputType | true
    _min?: AnonymousUserMinAggregateInputType
    _max?: AnonymousUserMaxAggregateInputType
  }

  export type AnonymousUserGroupByOutputType = {
    id: string
    joinedAt: Date
    updatedAt: Date
    expiresAt: Date | null
    _count: AnonymousUserCountAggregateOutputType | null
    _min: AnonymousUserMinAggregateOutputType | null
    _max: AnonymousUserMaxAggregateOutputType | null
  }

  type GetAnonymousUserGroupByPayload<T extends AnonymousUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnonymousUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnonymousUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnonymousUserGroupByOutputType[P]>
            : GetScalarType<T[P], AnonymousUserGroupByOutputType[P]>
        }
      >
    >


  export type AnonymousUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    projects?: boolean | AnonymousUser$projectsArgs<ExtArgs>
    scripts?: boolean | AnonymousUser$scriptsArgs<ExtArgs>
    voices?: boolean | AnonymousUser$voicesArgs<ExtArgs>
    _count?: boolean | AnonymousUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymousUser"]>

  export type AnonymousUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["anonymousUser"]>

  export type AnonymousUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["anonymousUser"]>

  export type AnonymousUserSelectScalar = {
    id?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }

  export type AnonymousUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "joinedAt" | "updatedAt" | "expiresAt", ExtArgs["result"]["anonymousUser"]>
  export type AnonymousUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | AnonymousUser$projectsArgs<ExtArgs>
    scripts?: boolean | AnonymousUser$scriptsArgs<ExtArgs>
    voices?: boolean | AnonymousUser$voicesArgs<ExtArgs>
    _count?: boolean | AnonymousUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnonymousUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnonymousUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnonymousUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnonymousUser"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      scripts: Prisma.$ScriptPayload<ExtArgs>[]
      voices: Prisma.$VoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      joinedAt: Date
      updatedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["anonymousUser"]>
    composites: {}
  }

  type AnonymousUserGetPayload<S extends boolean | null | undefined | AnonymousUserDefaultArgs> = $Result.GetResult<Prisma.$AnonymousUserPayload, S>

  type AnonymousUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnonymousUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnonymousUserCountAggregateInputType | true
    }

  export interface AnonymousUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnonymousUser'], meta: { name: 'AnonymousUser' } }
    /**
     * Find zero or one AnonymousUser that matches the filter.
     * @param {AnonymousUserFindUniqueArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnonymousUserFindUniqueArgs>(args: SelectSubset<T, AnonymousUserFindUniqueArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnonymousUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnonymousUserFindUniqueOrThrowArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnonymousUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AnonymousUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnonymousUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindFirstArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnonymousUserFindFirstArgs>(args?: SelectSubset<T, AnonymousUserFindFirstArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnonymousUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindFirstOrThrowArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnonymousUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AnonymousUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnonymousUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnonymousUsers
     * const anonymousUsers = await prisma.anonymousUser.findMany()
     * 
     * // Get first 10 AnonymousUsers
     * const anonymousUsers = await prisma.anonymousUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anonymousUserWithIdOnly = await prisma.anonymousUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnonymousUserFindManyArgs>(args?: SelectSubset<T, AnonymousUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnonymousUser.
     * @param {AnonymousUserCreateArgs} args - Arguments to create a AnonymousUser.
     * @example
     * // Create one AnonymousUser
     * const AnonymousUser = await prisma.anonymousUser.create({
     *   data: {
     *     // ... data to create a AnonymousUser
     *   }
     * })
     * 
     */
    create<T extends AnonymousUserCreateArgs>(args: SelectSubset<T, AnonymousUserCreateArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnonymousUsers.
     * @param {AnonymousUserCreateManyArgs} args - Arguments to create many AnonymousUsers.
     * @example
     * // Create many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnonymousUserCreateManyArgs>(args?: SelectSubset<T, AnonymousUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnonymousUsers and returns the data saved in the database.
     * @param {AnonymousUserCreateManyAndReturnArgs} args - Arguments to create many AnonymousUsers.
     * @example
     * // Create many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnonymousUsers and only return the `id`
     * const anonymousUserWithIdOnly = await prisma.anonymousUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnonymousUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AnonymousUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnonymousUser.
     * @param {AnonymousUserDeleteArgs} args - Arguments to delete one AnonymousUser.
     * @example
     * // Delete one AnonymousUser
     * const AnonymousUser = await prisma.anonymousUser.delete({
     *   where: {
     *     // ... filter to delete one AnonymousUser
     *   }
     * })
     * 
     */
    delete<T extends AnonymousUserDeleteArgs>(args: SelectSubset<T, AnonymousUserDeleteArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnonymousUser.
     * @param {AnonymousUserUpdateArgs} args - Arguments to update one AnonymousUser.
     * @example
     * // Update one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnonymousUserUpdateArgs>(args: SelectSubset<T, AnonymousUserUpdateArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnonymousUsers.
     * @param {AnonymousUserDeleteManyArgs} args - Arguments to filter AnonymousUsers to delete.
     * @example
     * // Delete a few AnonymousUsers
     * const { count } = await prisma.anonymousUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnonymousUserDeleteManyArgs>(args?: SelectSubset<T, AnonymousUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnonymousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnonymousUserUpdateManyArgs>(args: SelectSubset<T, AnonymousUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnonymousUsers and returns the data updated in the database.
     * @param {AnonymousUserUpdateManyAndReturnArgs} args - Arguments to update many AnonymousUsers.
     * @example
     * // Update many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnonymousUsers and only return the `id`
     * const anonymousUserWithIdOnly = await prisma.anonymousUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnonymousUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AnonymousUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnonymousUser.
     * @param {AnonymousUserUpsertArgs} args - Arguments to update or create a AnonymousUser.
     * @example
     * // Update or create a AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.upsert({
     *   create: {
     *     // ... data to create a AnonymousUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnonymousUser we want to update
     *   }
     * })
     */
    upsert<T extends AnonymousUserUpsertArgs>(args: SelectSubset<T, AnonymousUserUpsertArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnonymousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserCountArgs} args - Arguments to filter AnonymousUsers to count.
     * @example
     * // Count the number of AnonymousUsers
     * const count = await prisma.anonymousUser.count({
     *   where: {
     *     // ... the filter for the AnonymousUsers we want to count
     *   }
     * })
    **/
    count<T extends AnonymousUserCountArgs>(
      args?: Subset<T, AnonymousUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnonymousUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnonymousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnonymousUserAggregateArgs>(args: Subset<T, AnonymousUserAggregateArgs>): Prisma.PrismaPromise<GetAnonymousUserAggregateType<T>>

    /**
     * Group by AnonymousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnonymousUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnonymousUserGroupByArgs['orderBy'] }
        : { orderBy?: AnonymousUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnonymousUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnonymousUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnonymousUser model
   */
  readonly fields: AnonymousUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnonymousUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnonymousUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends AnonymousUser$projectsArgs<ExtArgs> = {}>(args?: Subset<T, AnonymousUser$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scripts<T extends AnonymousUser$scriptsArgs<ExtArgs> = {}>(args?: Subset<T, AnonymousUser$scriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voices<T extends AnonymousUser$voicesArgs<ExtArgs> = {}>(args?: Subset<T, AnonymousUser$voicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnonymousUser model
   */
  interface AnonymousUserFieldRefs {
    readonly id: FieldRef<"AnonymousUser", 'String'>
    readonly joinedAt: FieldRef<"AnonymousUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AnonymousUser", 'DateTime'>
    readonly expiresAt: FieldRef<"AnonymousUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnonymousUser findUnique
   */
  export type AnonymousUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser findUniqueOrThrow
   */
  export type AnonymousUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser findFirst
   */
  export type AnonymousUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationInput | AnonymousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymousUsers.
     */
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser findFirstOrThrow
   */
  export type AnonymousUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationInput | AnonymousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymousUsers.
     */
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser findMany
   */
  export type AnonymousUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * Filter, which AnonymousUsers to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationInput | AnonymousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser create
   */
  export type AnonymousUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AnonymousUser.
     */
    data: XOR<AnonymousUserCreateInput, AnonymousUserUncheckedCreateInput>
  }

  /**
   * AnonymousUser createMany
   */
  export type AnonymousUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnonymousUsers.
     */
    data: AnonymousUserCreateManyInput | AnonymousUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnonymousUser createManyAndReturn
   */
  export type AnonymousUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * The data used to create many AnonymousUsers.
     */
    data: AnonymousUserCreateManyInput | AnonymousUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnonymousUser update
   */
  export type AnonymousUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AnonymousUser.
     */
    data: XOR<AnonymousUserUpdateInput, AnonymousUserUncheckedUpdateInput>
    /**
     * Choose, which AnonymousUser to update.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser updateMany
   */
  export type AnonymousUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnonymousUsers.
     */
    data: XOR<AnonymousUserUpdateManyMutationInput, AnonymousUserUncheckedUpdateManyInput>
    /**
     * Filter which AnonymousUsers to update
     */
    where?: AnonymousUserWhereInput
    /**
     * Limit how many AnonymousUsers to update.
     */
    limit?: number
  }

  /**
   * AnonymousUser updateManyAndReturn
   */
  export type AnonymousUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * The data used to update AnonymousUsers.
     */
    data: XOR<AnonymousUserUpdateManyMutationInput, AnonymousUserUncheckedUpdateManyInput>
    /**
     * Filter which AnonymousUsers to update
     */
    where?: AnonymousUserWhereInput
    /**
     * Limit how many AnonymousUsers to update.
     */
    limit?: number
  }

  /**
   * AnonymousUser upsert
   */
  export type AnonymousUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AnonymousUser to update in case it exists.
     */
    where: AnonymousUserWhereUniqueInput
    /**
     * In case the AnonymousUser found by the `where` argument doesn't exist, create a new AnonymousUser with this data.
     */
    create: XOR<AnonymousUserCreateInput, AnonymousUserUncheckedCreateInput>
    /**
     * In case the AnonymousUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnonymousUserUpdateInput, AnonymousUserUncheckedUpdateInput>
  }

  /**
   * AnonymousUser delete
   */
  export type AnonymousUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    /**
     * Filter which AnonymousUser to delete.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser deleteMany
   */
  export type AnonymousUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnonymousUsers to delete
     */
    where?: AnonymousUserWhereInput
    /**
     * Limit how many AnonymousUsers to delete.
     */
    limit?: number
  }

  /**
   * AnonymousUser.projects
   */
  export type AnonymousUser$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * AnonymousUser.scripts
   */
  export type AnonymousUser$scriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    cursor?: ScriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * AnonymousUser.voices
   */
  export type AnonymousUser$voicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    where?: VoiceWhereInput
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    cursor?: VoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * AnonymousUser without action
   */
  export type AnonymousUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    anonymousUserId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    anonymousUserId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    anonymousUserId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    anonymousUserId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    anonymousUserId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    anonymousUserId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string
    anonymousUserId: string | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Project$anonymousUserArgs<ExtArgs>
    scripts?: boolean | Project$scriptsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Project$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Project$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt" | "deletedAt" | "userId" | "anonymousUserId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Project$anonymousUserArgs<ExtArgs>
    scripts?: boolean | Project$scriptsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Project$anonymousUserArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Project$anonymousUserArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      anonymousUser: Prisma.$AnonymousUserPayload<ExtArgs> | null
      scripts: Prisma.$ScriptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string
      anonymousUserId: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anonymousUser<T extends Project$anonymousUserArgs<ExtArgs> = {}>(args?: Subset<T, Project$anonymousUserArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scripts<T extends Project$scriptsArgs<ExtArgs> = {}>(args?: Subset<T, Project$scriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly username: FieldRef<"Project", 'String'>
    readonly email: FieldRef<"Project", 'String'>
    readonly password: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly anonymousUserId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.anonymousUser
   */
  export type Project$anonymousUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    where?: AnonymousUserWhereInput
  }

  /**
   * Project.scripts
   */
  export type Project$scriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    cursor?: ScriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Script
   */

  export type AggregateScript = {
    _count: ScriptCountAggregateOutputType | null
    _min: ScriptMinAggregateOutputType | null
    _max: ScriptMaxAggregateOutputType | null
  }

  export type ScriptMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    text: string | null
    metadata: string | null
    createdAt: Date | null
    deletedAt: Date | null
    userId: string | null
    projectId: string | null
    voicesId: string | null
    anonymousUserId: string | null
  }

  export type ScriptMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    text: string | null
    metadata: string | null
    createdAt: Date | null
    deletedAt: Date | null
    userId: string | null
    projectId: string | null
    voicesId: string | null
    anonymousUserId: string | null
  }

  export type ScriptCountAggregateOutputType = {
    id: number
    title: number
    type: number
    text: number
    metadata: number
    createdAt: number
    deletedAt: number
    userId: number
    projectId: number
    voicesId: number
    anonymousUserId: number
    _all: number
  }


  export type ScriptMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    text?: true
    metadata?: true
    createdAt?: true
    deletedAt?: true
    userId?: true
    projectId?: true
    voicesId?: true
    anonymousUserId?: true
  }

  export type ScriptMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    text?: true
    metadata?: true
    createdAt?: true
    deletedAt?: true
    userId?: true
    projectId?: true
    voicesId?: true
    anonymousUserId?: true
  }

  export type ScriptCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    text?: true
    metadata?: true
    createdAt?: true
    deletedAt?: true
    userId?: true
    projectId?: true
    voicesId?: true
    anonymousUserId?: true
    _all?: true
  }

  export type ScriptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Script to aggregate.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scripts
    **/
    _count?: true | ScriptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScriptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScriptMaxAggregateInputType
  }

  export type GetScriptAggregateType<T extends ScriptAggregateArgs> = {
        [P in keyof T & keyof AggregateScript]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScript[P]>
      : GetScalarType<T[P], AggregateScript[P]>
  }




  export type ScriptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithAggregationInput | ScriptOrderByWithAggregationInput[]
    by: ScriptScalarFieldEnum[] | ScriptScalarFieldEnum
    having?: ScriptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScriptCountAggregateInputType | true
    _min?: ScriptMinAggregateInputType
    _max?: ScriptMaxAggregateInputType
  }

  export type ScriptGroupByOutputType = {
    id: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt: Date
    deletedAt: Date | null
    userId: string
    projectId: string
    voicesId: string | null
    anonymousUserId: string | null
    _count: ScriptCountAggregateOutputType | null
    _min: ScriptMinAggregateOutputType | null
    _max: ScriptMaxAggregateOutputType | null
  }

  type GetScriptGroupByPayload<T extends ScriptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScriptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScriptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScriptGroupByOutputType[P]>
            : GetScalarType<T[P], ScriptGroupByOutputType[P]>
        }
      >
    >


  export type ScriptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    text?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    projectId?: boolean
    voicesId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    voices?: boolean | Script$voicesArgs<ExtArgs>
    anonymousUser?: boolean | Script$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["script"]>

  export type ScriptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    text?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    projectId?: boolean
    voicesId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    voices?: boolean | Script$voicesArgs<ExtArgs>
    anonymousUser?: boolean | Script$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["script"]>

  export type ScriptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    text?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    projectId?: boolean
    voicesId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    voices?: boolean | Script$voicesArgs<ExtArgs>
    anonymousUser?: boolean | Script$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["script"]>

  export type ScriptSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    text?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    projectId?: boolean
    voicesId?: boolean
    anonymousUserId?: boolean
  }

  export type ScriptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "text" | "metadata" | "createdAt" | "deletedAt" | "userId" | "projectId" | "voicesId" | "anonymousUserId", ExtArgs["result"]["script"]>
  export type ScriptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    voices?: boolean | Script$voicesArgs<ExtArgs>
    anonymousUser?: boolean | Script$anonymousUserArgs<ExtArgs>
  }
  export type ScriptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    voices?: boolean | Script$voicesArgs<ExtArgs>
    anonymousUser?: boolean | Script$anonymousUserArgs<ExtArgs>
  }
  export type ScriptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    voices?: boolean | Script$voicesArgs<ExtArgs>
    anonymousUser?: boolean | Script$anonymousUserArgs<ExtArgs>
  }

  export type $ScriptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Script"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      voices: Prisma.$VoicePayload<ExtArgs> | null
      anonymousUser: Prisma.$AnonymousUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      text: string
      metadata: string
      createdAt: Date
      deletedAt: Date | null
      userId: string
      projectId: string
      voicesId: string | null
      anonymousUserId: string | null
    }, ExtArgs["result"]["script"]>
    composites: {}
  }

  type ScriptGetPayload<S extends boolean | null | undefined | ScriptDefaultArgs> = $Result.GetResult<Prisma.$ScriptPayload, S>

  type ScriptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScriptCountAggregateInputType | true
    }

  export interface ScriptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Script'], meta: { name: 'Script' } }
    /**
     * Find zero or one Script that matches the filter.
     * @param {ScriptFindUniqueArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScriptFindUniqueArgs>(args: SelectSubset<T, ScriptFindUniqueArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Script that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScriptFindUniqueOrThrowArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScriptFindUniqueOrThrowArgs>(args: SelectSubset<T, ScriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Script that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindFirstArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScriptFindFirstArgs>(args?: SelectSubset<T, ScriptFindFirstArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Script that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindFirstOrThrowArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScriptFindFirstOrThrowArgs>(args?: SelectSubset<T, ScriptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scripts
     * const scripts = await prisma.script.findMany()
     * 
     * // Get first 10 Scripts
     * const scripts = await prisma.script.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scriptWithIdOnly = await prisma.script.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScriptFindManyArgs>(args?: SelectSubset<T, ScriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Script.
     * @param {ScriptCreateArgs} args - Arguments to create a Script.
     * @example
     * // Create one Script
     * const Script = await prisma.script.create({
     *   data: {
     *     // ... data to create a Script
     *   }
     * })
     * 
     */
    create<T extends ScriptCreateArgs>(args: SelectSubset<T, ScriptCreateArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scripts.
     * @param {ScriptCreateManyArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const script = await prisma.script.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScriptCreateManyArgs>(args?: SelectSubset<T, ScriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scripts and returns the data saved in the database.
     * @param {ScriptCreateManyAndReturnArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const script = await prisma.script.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scripts and only return the `id`
     * const scriptWithIdOnly = await prisma.script.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScriptCreateManyAndReturnArgs>(args?: SelectSubset<T, ScriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Script.
     * @param {ScriptDeleteArgs} args - Arguments to delete one Script.
     * @example
     * // Delete one Script
     * const Script = await prisma.script.delete({
     *   where: {
     *     // ... filter to delete one Script
     *   }
     * })
     * 
     */
    delete<T extends ScriptDeleteArgs>(args: SelectSubset<T, ScriptDeleteArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Script.
     * @param {ScriptUpdateArgs} args - Arguments to update one Script.
     * @example
     * // Update one Script
     * const script = await prisma.script.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScriptUpdateArgs>(args: SelectSubset<T, ScriptUpdateArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scripts.
     * @param {ScriptDeleteManyArgs} args - Arguments to filter Scripts to delete.
     * @example
     * // Delete a few Scripts
     * const { count } = await prisma.script.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScriptDeleteManyArgs>(args?: SelectSubset<T, ScriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scripts
     * const script = await prisma.script.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScriptUpdateManyArgs>(args: SelectSubset<T, ScriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scripts and returns the data updated in the database.
     * @param {ScriptUpdateManyAndReturnArgs} args - Arguments to update many Scripts.
     * @example
     * // Update many Scripts
     * const script = await prisma.script.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scripts and only return the `id`
     * const scriptWithIdOnly = await prisma.script.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScriptUpdateManyAndReturnArgs>(args: SelectSubset<T, ScriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Script.
     * @param {ScriptUpsertArgs} args - Arguments to update or create a Script.
     * @example
     * // Update or create a Script
     * const script = await prisma.script.upsert({
     *   create: {
     *     // ... data to create a Script
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Script we want to update
     *   }
     * })
     */
    upsert<T extends ScriptUpsertArgs>(args: SelectSubset<T, ScriptUpsertArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptCountArgs} args - Arguments to filter Scripts to count.
     * @example
     * // Count the number of Scripts
     * const count = await prisma.script.count({
     *   where: {
     *     // ... the filter for the Scripts we want to count
     *   }
     * })
    **/
    count<T extends ScriptCountArgs>(
      args?: Subset<T, ScriptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScriptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Script.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScriptAggregateArgs>(args: Subset<T, ScriptAggregateArgs>): Prisma.PrismaPromise<GetScriptAggregateType<T>>

    /**
     * Group by Script.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScriptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScriptGroupByArgs['orderBy'] }
        : { orderBy?: ScriptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Script model
   */
  readonly fields: ScriptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Script.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScriptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voices<T extends Script$voicesArgs<ExtArgs> = {}>(args?: Subset<T, Script$voicesArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    anonymousUser<T extends Script$anonymousUserArgs<ExtArgs> = {}>(args?: Subset<T, Script$anonymousUserArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Script model
   */
  interface ScriptFieldRefs {
    readonly id: FieldRef<"Script", 'String'>
    readonly title: FieldRef<"Script", 'String'>
    readonly type: FieldRef<"Script", 'String'>
    readonly text: FieldRef<"Script", 'String'>
    readonly metadata: FieldRef<"Script", 'String'>
    readonly createdAt: FieldRef<"Script", 'DateTime'>
    readonly deletedAt: FieldRef<"Script", 'DateTime'>
    readonly userId: FieldRef<"Script", 'String'>
    readonly projectId: FieldRef<"Script", 'String'>
    readonly voicesId: FieldRef<"Script", 'String'>
    readonly anonymousUserId: FieldRef<"Script", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Script findUnique
   */
  export type ScriptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script findUniqueOrThrow
   */
  export type ScriptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script findFirst
   */
  export type ScriptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scripts.
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scripts.
     */
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Script findFirstOrThrow
   */
  export type ScriptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scripts.
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scripts.
     */
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Script findMany
   */
  export type ScriptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Scripts to fetch.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scripts.
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Script create
   */
  export type ScriptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * The data needed to create a Script.
     */
    data: XOR<ScriptCreateInput, ScriptUncheckedCreateInput>
  }

  /**
   * Script createMany
   */
  export type ScriptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scripts.
     */
    data: ScriptCreateManyInput | ScriptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Script createManyAndReturn
   */
  export type ScriptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * The data used to create many Scripts.
     */
    data: ScriptCreateManyInput | ScriptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Script update
   */
  export type ScriptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * The data needed to update a Script.
     */
    data: XOR<ScriptUpdateInput, ScriptUncheckedUpdateInput>
    /**
     * Choose, which Script to update.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script updateMany
   */
  export type ScriptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scripts.
     */
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyInput>
    /**
     * Filter which Scripts to update
     */
    where?: ScriptWhereInput
    /**
     * Limit how many Scripts to update.
     */
    limit?: number
  }

  /**
   * Script updateManyAndReturn
   */
  export type ScriptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * The data used to update Scripts.
     */
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyInput>
    /**
     * Filter which Scripts to update
     */
    where?: ScriptWhereInput
    /**
     * Limit how many Scripts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Script upsert
   */
  export type ScriptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * The filter to search for the Script to update in case it exists.
     */
    where: ScriptWhereUniqueInput
    /**
     * In case the Script found by the `where` argument doesn't exist, create a new Script with this data.
     */
    create: XOR<ScriptCreateInput, ScriptUncheckedCreateInput>
    /**
     * In case the Script was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScriptUpdateInput, ScriptUncheckedUpdateInput>
  }

  /**
   * Script delete
   */
  export type ScriptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter which Script to delete.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script deleteMany
   */
  export type ScriptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scripts to delete
     */
    where?: ScriptWhereInput
    /**
     * Limit how many Scripts to delete.
     */
    limit?: number
  }

  /**
   * Script.voices
   */
  export type Script$voicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    where?: VoiceWhereInput
  }

  /**
   * Script.anonymousUser
   */
  export type Script$anonymousUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    where?: AnonymousUserWhereInput
  }

  /**
   * Script without action
   */
  export type ScriptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
  }


  /**
   * Model Voice
   */

  export type AggregateVoice = {
    _count: VoiceCountAggregateOutputType | null
    _min: VoiceMinAggregateOutputType | null
    _max: VoiceMaxAggregateOutputType | null
  }

  export type VoiceMinAggregateOutputType = {
    id: string | null
    hash: string | null
    metadata: string | null
    createdAt: Date | null
    deletedAt: Date | null
    userId: string | null
    anonymousUserId: string | null
  }

  export type VoiceMaxAggregateOutputType = {
    id: string | null
    hash: string | null
    metadata: string | null
    createdAt: Date | null
    deletedAt: Date | null
    userId: string | null
    anonymousUserId: string | null
  }

  export type VoiceCountAggregateOutputType = {
    id: number
    hash: number
    metadata: number
    createdAt: number
    deletedAt: number
    userId: number
    anonymousUserId: number
    _all: number
  }


  export type VoiceMinAggregateInputType = {
    id?: true
    hash?: true
    metadata?: true
    createdAt?: true
    deletedAt?: true
    userId?: true
    anonymousUserId?: true
  }

  export type VoiceMaxAggregateInputType = {
    id?: true
    hash?: true
    metadata?: true
    createdAt?: true
    deletedAt?: true
    userId?: true
    anonymousUserId?: true
  }

  export type VoiceCountAggregateInputType = {
    id?: true
    hash?: true
    metadata?: true
    createdAt?: true
    deletedAt?: true
    userId?: true
    anonymousUserId?: true
    _all?: true
  }

  export type VoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voice to aggregate.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voices
    **/
    _count?: true | VoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceMaxAggregateInputType
  }

  export type GetVoiceAggregateType<T extends VoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateVoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoice[P]>
      : GetScalarType<T[P], AggregateVoice[P]>
  }




  export type VoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceWhereInput
    orderBy?: VoiceOrderByWithAggregationInput | VoiceOrderByWithAggregationInput[]
    by: VoiceScalarFieldEnum[] | VoiceScalarFieldEnum
    having?: VoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceCountAggregateInputType | true
    _min?: VoiceMinAggregateInputType
    _max?: VoiceMaxAggregateInputType
  }

  export type VoiceGroupByOutputType = {
    id: string
    hash: string
    metadata: string
    createdAt: Date
    deletedAt: Date | null
    userId: string
    anonymousUserId: string | null
    _count: VoiceCountAggregateOutputType | null
    _min: VoiceMinAggregateOutputType | null
    _max: VoiceMaxAggregateOutputType | null
  }

  type GetVoiceGroupByPayload<T extends VoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceGroupByOutputType[P]>
        }
      >
    >


  export type VoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Voice$anonymousUserArgs<ExtArgs>
    script?: boolean | Voice$scriptArgs<ExtArgs>
    _count?: boolean | VoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voice"]>

  export type VoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Voice$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["voice"]>

  export type VoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Voice$anonymousUserArgs<ExtArgs>
  }, ExtArgs["result"]["voice"]>

  export type VoiceSelectScalar = {
    id?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    anonymousUserId?: boolean
  }

  export type VoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hash" | "metadata" | "createdAt" | "deletedAt" | "userId" | "anonymousUserId", ExtArgs["result"]["voice"]>
  export type VoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Voice$anonymousUserArgs<ExtArgs>
    script?: boolean | Voice$scriptArgs<ExtArgs>
    _count?: boolean | VoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Voice$anonymousUserArgs<ExtArgs>
  }
  export type VoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    anonymousUser?: boolean | Voice$anonymousUserArgs<ExtArgs>
  }

  export type $VoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      anonymousUser: Prisma.$AnonymousUserPayload<ExtArgs> | null
      script: Prisma.$ScriptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hash: string
      metadata: string
      createdAt: Date
      deletedAt: Date | null
      userId: string
      anonymousUserId: string | null
    }, ExtArgs["result"]["voice"]>
    composites: {}
  }

  type VoiceGetPayload<S extends boolean | null | undefined | VoiceDefaultArgs> = $Result.GetResult<Prisma.$VoicePayload, S>

  type VoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceCountAggregateInputType | true
    }

  export interface VoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voice'], meta: { name: 'Voice' } }
    /**
     * Find zero or one Voice that matches the filter.
     * @param {VoiceFindUniqueArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceFindUniqueArgs>(args: SelectSubset<T, VoiceFindUniqueArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceFindUniqueOrThrowArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceFindFirstArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceFindFirstArgs>(args?: SelectSubset<T, VoiceFindFirstArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceFindFirstOrThrowArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voices
     * const voices = await prisma.voice.findMany()
     * 
     * // Get first 10 Voices
     * const voices = await prisma.voice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceWithIdOnly = await prisma.voice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceFindManyArgs>(args?: SelectSubset<T, VoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voice.
     * @param {VoiceCreateArgs} args - Arguments to create a Voice.
     * @example
     * // Create one Voice
     * const Voice = await prisma.voice.create({
     *   data: {
     *     // ... data to create a Voice
     *   }
     * })
     * 
     */
    create<T extends VoiceCreateArgs>(args: SelectSubset<T, VoiceCreateArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voices.
     * @param {VoiceCreateManyArgs} args - Arguments to create many Voices.
     * @example
     * // Create many Voices
     * const voice = await prisma.voice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceCreateManyArgs>(args?: SelectSubset<T, VoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voices and returns the data saved in the database.
     * @param {VoiceCreateManyAndReturnArgs} args - Arguments to create many Voices.
     * @example
     * // Create many Voices
     * const voice = await prisma.voice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voices and only return the `id`
     * const voiceWithIdOnly = await prisma.voice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voice.
     * @param {VoiceDeleteArgs} args - Arguments to delete one Voice.
     * @example
     * // Delete one Voice
     * const Voice = await prisma.voice.delete({
     *   where: {
     *     // ... filter to delete one Voice
     *   }
     * })
     * 
     */
    delete<T extends VoiceDeleteArgs>(args: SelectSubset<T, VoiceDeleteArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voice.
     * @param {VoiceUpdateArgs} args - Arguments to update one Voice.
     * @example
     * // Update one Voice
     * const voice = await prisma.voice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceUpdateArgs>(args: SelectSubset<T, VoiceUpdateArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voices.
     * @param {VoiceDeleteManyArgs} args - Arguments to filter Voices to delete.
     * @example
     * // Delete a few Voices
     * const { count } = await prisma.voice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceDeleteManyArgs>(args?: SelectSubset<T, VoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voices
     * const voice = await prisma.voice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceUpdateManyArgs>(args: SelectSubset<T, VoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voices and returns the data updated in the database.
     * @param {VoiceUpdateManyAndReturnArgs} args - Arguments to update many Voices.
     * @example
     * // Update many Voices
     * const voice = await prisma.voice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voices and only return the `id`
     * const voiceWithIdOnly = await prisma.voice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voice.
     * @param {VoiceUpsertArgs} args - Arguments to update or create a Voice.
     * @example
     * // Update or create a Voice
     * const voice = await prisma.voice.upsert({
     *   create: {
     *     // ... data to create a Voice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voice we want to update
     *   }
     * })
     */
    upsert<T extends VoiceUpsertArgs>(args: SelectSubset<T, VoiceUpsertArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCountArgs} args - Arguments to filter Voices to count.
     * @example
     * // Count the number of Voices
     * const count = await prisma.voice.count({
     *   where: {
     *     // ... the filter for the Voices we want to count
     *   }
     * })
    **/
    count<T extends VoiceCountArgs>(
      args?: Subset<T, VoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoiceAggregateArgs>(args: Subset<T, VoiceAggregateArgs>): Prisma.PrismaPromise<GetVoiceAggregateType<T>>

    /**
     * Group by Voice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceGroupByArgs['orderBy'] }
        : { orderBy?: VoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voice model
   */
  readonly fields: VoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anonymousUser<T extends Voice$anonymousUserArgs<ExtArgs> = {}>(args?: Subset<T, Voice$anonymousUserArgs<ExtArgs>>): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    script<T extends Voice$scriptArgs<ExtArgs> = {}>(args?: Subset<T, Voice$scriptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voice model
   */
  interface VoiceFieldRefs {
    readonly id: FieldRef<"Voice", 'String'>
    readonly hash: FieldRef<"Voice", 'String'>
    readonly metadata: FieldRef<"Voice", 'String'>
    readonly createdAt: FieldRef<"Voice", 'DateTime'>
    readonly deletedAt: FieldRef<"Voice", 'DateTime'>
    readonly userId: FieldRef<"Voice", 'String'>
    readonly anonymousUserId: FieldRef<"Voice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Voice findUnique
   */
  export type VoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice findUniqueOrThrow
   */
  export type VoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice findFirst
   */
  export type VoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voices.
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voices.
     */
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * Voice findFirstOrThrow
   */
  export type VoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voices.
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voices.
     */
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * Voice findMany
   */
  export type VoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voices to fetch.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voices.
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * Voice create
   */
  export type VoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Voice.
     */
    data: XOR<VoiceCreateInput, VoiceUncheckedCreateInput>
  }

  /**
   * Voice createMany
   */
  export type VoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voices.
     */
    data: VoiceCreateManyInput | VoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voice createManyAndReturn
   */
  export type VoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Voices.
     */
    data: VoiceCreateManyInput | VoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voice update
   */
  export type VoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Voice.
     */
    data: XOR<VoiceUpdateInput, VoiceUncheckedUpdateInput>
    /**
     * Choose, which Voice to update.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice updateMany
   */
  export type VoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voices.
     */
    data: XOR<VoiceUpdateManyMutationInput, VoiceUncheckedUpdateManyInput>
    /**
     * Filter which Voices to update
     */
    where?: VoiceWhereInput
    /**
     * Limit how many Voices to update.
     */
    limit?: number
  }

  /**
   * Voice updateManyAndReturn
   */
  export type VoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * The data used to update Voices.
     */
    data: XOR<VoiceUpdateManyMutationInput, VoiceUncheckedUpdateManyInput>
    /**
     * Filter which Voices to update
     */
    where?: VoiceWhereInput
    /**
     * Limit how many Voices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voice upsert
   */
  export type VoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Voice to update in case it exists.
     */
    where: VoiceWhereUniqueInput
    /**
     * In case the Voice found by the `where` argument doesn't exist, create a new Voice with this data.
     */
    create: XOR<VoiceCreateInput, VoiceUncheckedCreateInput>
    /**
     * In case the Voice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceUpdateInput, VoiceUncheckedUpdateInput>
  }

  /**
   * Voice delete
   */
  export type VoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter which Voice to delete.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice deleteMany
   */
  export type VoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voices to delete
     */
    where?: VoiceWhereInput
    /**
     * Limit how many Voices to delete.
     */
    limit?: number
  }

  /**
   * Voice.anonymousUser
   */
  export type Voice$anonymousUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymousUser
     */
    omit?: AnonymousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymousUserInclude<ExtArgs> | null
    where?: AnonymousUserWhereInput
  }

  /**
   * Voice.script
   */
  export type Voice$scriptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    cursor?: ScriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Voice without action
   */
  export type VoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnonymousUserScalarFieldEnum: {
    id: 'id',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt'
  };

  export type AnonymousUserScalarFieldEnum = (typeof AnonymousUserScalarFieldEnum)[keyof typeof AnonymousUserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    anonymousUserId: 'anonymousUserId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ScriptScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    text: 'text',
    metadata: 'metadata',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    projectId: 'projectId',
    voicesId: 'voicesId',
    anonymousUserId: 'anonymousUserId'
  };

  export type ScriptScalarFieldEnum = (typeof ScriptScalarFieldEnum)[keyof typeof ScriptScalarFieldEnum]


  export const VoiceScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    metadata: 'metadata',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    anonymousUserId: 'anonymousUserId'
  };

  export type VoiceScalarFieldEnum = (typeof VoiceScalarFieldEnum)[keyof typeof VoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    joinedAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    scripts?: ScriptListRelationFilter
    voices?: VoiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    scripts?: ScriptOrderByRelationAggregateInput
    voices?: VoiceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    joinedAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    scripts?: ScriptListRelationFilter
    voices?: VoiceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnonymousUserWhereInput = {
    AND?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    OR?: AnonymousUserWhereInput[]
    NOT?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    id?: StringFilter<"AnonymousUser"> | string
    joinedAt?: DateTimeFilter<"AnonymousUser"> | Date | string
    updatedAt?: DateTimeFilter<"AnonymousUser"> | Date | string
    expiresAt?: DateTimeNullableFilter<"AnonymousUser"> | Date | string | null
    projects?: ProjectListRelationFilter
    scripts?: ScriptListRelationFilter
    voices?: VoiceListRelationFilter
  }

  export type AnonymousUserOrderByWithRelationInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    scripts?: ScriptOrderByRelationAggregateInput
    voices?: VoiceOrderByRelationAggregateInput
  }

  export type AnonymousUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    OR?: AnonymousUserWhereInput[]
    NOT?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    joinedAt?: DateTimeFilter<"AnonymousUser"> | Date | string
    updatedAt?: DateTimeFilter<"AnonymousUser"> | Date | string
    expiresAt?: DateTimeNullableFilter<"AnonymousUser"> | Date | string | null
    projects?: ProjectListRelationFilter
    scripts?: ScriptListRelationFilter
    voices?: VoiceListRelationFilter
  }, "id">

  export type AnonymousUserOrderByWithAggregationInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: AnonymousUserCountOrderByAggregateInput
    _max?: AnonymousUserMaxOrderByAggregateInput
    _min?: AnonymousUserMinOrderByAggregateInput
  }

  export type AnonymousUserScalarWhereWithAggregatesInput = {
    AND?: AnonymousUserScalarWhereWithAggregatesInput | AnonymousUserScalarWhereWithAggregatesInput[]
    OR?: AnonymousUserScalarWhereWithAggregatesInput[]
    NOT?: AnonymousUserScalarWhereWithAggregatesInput | AnonymousUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnonymousUser"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"AnonymousUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnonymousUser"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"AnonymousUser"> | Date | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    username?: StringFilter<"Project"> | string
    email?: StringFilter<"Project"> | string
    password?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    userId?: StringFilter<"Project"> | string
    anonymousUserId?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anonymousUser?: XOR<AnonymousUserNullableScalarRelationFilter, AnonymousUserWhereInput> | null
    scripts?: ScriptListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    anonymousUser?: AnonymousUserOrderByWithRelationInput
    scripts?: ScriptOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    password?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    userId?: StringFilter<"Project"> | string
    anonymousUserId?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anonymousUser?: XOR<AnonymousUserNullableScalarRelationFilter, AnonymousUserWhereInput> | null
    scripts?: ScriptListRelationFilter
  }, "id" | "username" | "email">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    username?: StringWithAggregatesFilter<"Project"> | string
    email?: StringWithAggregatesFilter<"Project"> | string
    password?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Project"> | string
    anonymousUserId?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type ScriptWhereInput = {
    AND?: ScriptWhereInput | ScriptWhereInput[]
    OR?: ScriptWhereInput[]
    NOT?: ScriptWhereInput | ScriptWhereInput[]
    id?: StringFilter<"Script"> | string
    title?: StringFilter<"Script"> | string
    type?: StringFilter<"Script"> | string
    text?: StringFilter<"Script"> | string
    metadata?: StringFilter<"Script"> | string
    createdAt?: DateTimeFilter<"Script"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Script"> | Date | string | null
    userId?: StringFilter<"Script"> | string
    projectId?: StringFilter<"Script"> | string
    voicesId?: StringNullableFilter<"Script"> | string | null
    anonymousUserId?: StringNullableFilter<"Script"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    voices?: XOR<VoiceNullableScalarRelationFilter, VoiceWhereInput> | null
    anonymousUser?: XOR<AnonymousUserNullableScalarRelationFilter, AnonymousUserWhereInput> | null
  }

  export type ScriptOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    text?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    voicesId?: SortOrderInput | SortOrder
    anonymousUserId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    voices?: VoiceOrderByWithRelationInput
    anonymousUser?: AnonymousUserOrderByWithRelationInput
  }

  export type ScriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScriptWhereInput | ScriptWhereInput[]
    OR?: ScriptWhereInput[]
    NOT?: ScriptWhereInput | ScriptWhereInput[]
    title?: StringFilter<"Script"> | string
    type?: StringFilter<"Script"> | string
    text?: StringFilter<"Script"> | string
    metadata?: StringFilter<"Script"> | string
    createdAt?: DateTimeFilter<"Script"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Script"> | Date | string | null
    userId?: StringFilter<"Script"> | string
    projectId?: StringFilter<"Script"> | string
    voicesId?: StringNullableFilter<"Script"> | string | null
    anonymousUserId?: StringNullableFilter<"Script"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    voices?: XOR<VoiceNullableScalarRelationFilter, VoiceWhereInput> | null
    anonymousUser?: XOR<AnonymousUserNullableScalarRelationFilter, AnonymousUserWhereInput> | null
  }, "id">

  export type ScriptOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    text?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    voicesId?: SortOrderInput | SortOrder
    anonymousUserId?: SortOrderInput | SortOrder
    _count?: ScriptCountOrderByAggregateInput
    _max?: ScriptMaxOrderByAggregateInput
    _min?: ScriptMinOrderByAggregateInput
  }

  export type ScriptScalarWhereWithAggregatesInput = {
    AND?: ScriptScalarWhereWithAggregatesInput | ScriptScalarWhereWithAggregatesInput[]
    OR?: ScriptScalarWhereWithAggregatesInput[]
    NOT?: ScriptScalarWhereWithAggregatesInput | ScriptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Script"> | string
    title?: StringWithAggregatesFilter<"Script"> | string
    type?: StringWithAggregatesFilter<"Script"> | string
    text?: StringWithAggregatesFilter<"Script"> | string
    metadata?: StringWithAggregatesFilter<"Script"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Script"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Script"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Script"> | string
    projectId?: StringWithAggregatesFilter<"Script"> | string
    voicesId?: StringNullableWithAggregatesFilter<"Script"> | string | null
    anonymousUserId?: StringNullableWithAggregatesFilter<"Script"> | string | null
  }

  export type VoiceWhereInput = {
    AND?: VoiceWhereInput | VoiceWhereInput[]
    OR?: VoiceWhereInput[]
    NOT?: VoiceWhereInput | VoiceWhereInput[]
    id?: StringFilter<"Voice"> | string
    hash?: StringFilter<"Voice"> | string
    metadata?: StringFilter<"Voice"> | string
    createdAt?: DateTimeFilter<"Voice"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Voice"> | Date | string | null
    userId?: StringFilter<"Voice"> | string
    anonymousUserId?: StringNullableFilter<"Voice"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anonymousUser?: XOR<AnonymousUserNullableScalarRelationFilter, AnonymousUserWhereInput> | null
    script?: ScriptListRelationFilter
  }

  export type VoiceOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    anonymousUser?: AnonymousUserOrderByWithRelationInput
    script?: ScriptOrderByRelationAggregateInput
  }

  export type VoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoiceWhereInput | VoiceWhereInput[]
    OR?: VoiceWhereInput[]
    NOT?: VoiceWhereInput | VoiceWhereInput[]
    hash?: StringFilter<"Voice"> | string
    metadata?: StringFilter<"Voice"> | string
    createdAt?: DateTimeFilter<"Voice"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Voice"> | Date | string | null
    userId?: StringFilter<"Voice"> | string
    anonymousUserId?: StringNullableFilter<"Voice"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    anonymousUser?: XOR<AnonymousUserNullableScalarRelationFilter, AnonymousUserWhereInput> | null
    script?: ScriptListRelationFilter
  }, "id">

  export type VoiceOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrderInput | SortOrder
    _count?: VoiceCountOrderByAggregateInput
    _max?: VoiceMaxOrderByAggregateInput
    _min?: VoiceMinOrderByAggregateInput
  }

  export type VoiceScalarWhereWithAggregatesInput = {
    AND?: VoiceScalarWhereWithAggregatesInput | VoiceScalarWhereWithAggregatesInput[]
    OR?: VoiceScalarWhereWithAggregatesInput[]
    NOT?: VoiceScalarWhereWithAggregatesInput | VoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voice"> | string
    hash?: StringWithAggregatesFilter<"Voice"> | string
    metadata?: StringWithAggregatesFilter<"Voice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Voice"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Voice"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Voice"> | string
    anonymousUserId?: StringNullableWithAggregatesFilter<"Voice"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    scripts?: ScriptCreateNestedManyWithoutUserInput
    voices?: VoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutUserInput
    voices?: VoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    scripts?: ScriptUpdateManyWithoutUserNestedInput
    voices?: VoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutUserNestedInput
    voices?: VoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnonymousUserCreateInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutAnonymousUserInput
    scripts?: ScriptCreateNestedManyWithoutAnonymousUserInput
    voices?: VoiceCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserUncheckedCreateInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutAnonymousUserInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutAnonymousUserInput
    voices?: VoiceUncheckedCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutAnonymousUserNestedInput
    scripts?: ScriptUpdateManyWithoutAnonymousUserNestedInput
    voices?: VoiceUpdateManyWithoutAnonymousUserNestedInput
  }

  export type AnonymousUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutAnonymousUserNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutAnonymousUserNestedInput
    voices?: VoiceUncheckedUpdateManyWithoutAnonymousUserNestedInput
  }

  export type AnonymousUserCreateManyInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type AnonymousUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnonymousUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProjectsInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutProjectsInput
    scripts?: ScriptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    anonymousUserId?: string | null
    scripts?: ScriptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutProjectsNestedInput
    scripts?: ScriptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
    scripts?: ScriptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    anonymousUserId?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptCreateInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutScriptsInput
    project: ProjectCreateNestedOneWithoutScriptsInput
    voices?: VoiceCreateNestedOneWithoutScriptInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutScriptsInput
  }

  export type ScriptUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    projectId: string
    voicesId?: string | null
    anonymousUserId?: string | null
  }

  export type ScriptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput
    project?: ProjectUpdateOneRequiredWithoutScriptsNestedInput
    voices?: VoiceUpdateOneWithoutScriptNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutScriptsNestedInput
  }

  export type ScriptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptCreateManyInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    projectId: string
    voicesId?: string | null
    anonymousUserId?: string | null
  }

  export type ScriptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScriptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoiceCreateInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVoicesInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutVoicesInput
    script?: ScriptCreateNestedManyWithoutVoicesInput
  }

  export type VoiceUncheckedCreateInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    anonymousUserId?: string | null
    script?: ScriptUncheckedCreateNestedManyWithoutVoicesInput
  }

  export type VoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVoicesNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutVoicesNestedInput
    script?: ScriptUpdateManyWithoutVoicesNestedInput
  }

  export type VoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
    script?: ScriptUncheckedUpdateManyWithoutVoicesNestedInput
  }

  export type VoiceCreateManyInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    anonymousUserId?: string | null
  }

  export type VoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ScriptListRelationFilter = {
    every?: ScriptWhereInput
    some?: ScriptWhereInput
    none?: ScriptWhereInput
  }

  export type VoiceListRelationFilter = {
    every?: VoiceWhereInput
    some?: VoiceWhereInput
    none?: VoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScriptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AnonymousUserCountOrderByAggregateInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AnonymousUserMaxOrderByAggregateInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AnonymousUserMinOrderByAggregateInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnonymousUserNullableScalarRelationFilter = {
    is?: AnonymousUserWhereInput | null
    isNot?: AnonymousUserWhereInput | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type VoiceNullableScalarRelationFilter = {
    is?: VoiceWhereInput | null
    isNot?: VoiceWhereInput | null
  }

  export type ScriptCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    text?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    voicesId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type ScriptMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    text?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    voicesId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type ScriptMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    text?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    voicesId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type VoiceCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type VoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type VoiceMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    anonymousUserId?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ScriptCreateNestedManyWithoutUserInput = {
    create?: XOR<ScriptCreateWithoutUserInput, ScriptUncheckedCreateWithoutUserInput> | ScriptCreateWithoutUserInput[] | ScriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutUserInput | ScriptCreateOrConnectWithoutUserInput[]
    createMany?: ScriptCreateManyUserInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type VoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<VoiceCreateWithoutUserInput, VoiceUncheckedCreateWithoutUserInput> | VoiceCreateWithoutUserInput[] | VoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutUserInput | VoiceCreateOrConnectWithoutUserInput[]
    createMany?: VoiceCreateManyUserInputEnvelope
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ScriptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScriptCreateWithoutUserInput, ScriptUncheckedCreateWithoutUserInput> | ScriptCreateWithoutUserInput[] | ScriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutUserInput | ScriptCreateOrConnectWithoutUserInput[]
    createMany?: ScriptCreateManyUserInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type VoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoiceCreateWithoutUserInput, VoiceUncheckedCreateWithoutUserInput> | VoiceCreateWithoutUserInput[] | VoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutUserInput | VoiceCreateOrConnectWithoutUserInput[]
    createMany?: VoiceCreateManyUserInputEnvelope
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ScriptUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScriptCreateWithoutUserInput, ScriptUncheckedCreateWithoutUserInput> | ScriptCreateWithoutUserInput[] | ScriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutUserInput | ScriptCreateOrConnectWithoutUserInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutUserInput | ScriptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScriptCreateManyUserInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutUserInput | ScriptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutUserInput | ScriptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type VoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoiceCreateWithoutUserInput, VoiceUncheckedCreateWithoutUserInput> | VoiceCreateWithoutUserInput[] | VoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutUserInput | VoiceCreateOrConnectWithoutUserInput[]
    upsert?: VoiceUpsertWithWhereUniqueWithoutUserInput | VoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoiceCreateManyUserInputEnvelope
    set?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    disconnect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    delete?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    update?: VoiceUpdateWithWhereUniqueWithoutUserInput | VoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoiceUpdateManyWithWhereWithoutUserInput | VoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoiceScalarWhereInput | VoiceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ScriptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScriptCreateWithoutUserInput, ScriptUncheckedCreateWithoutUserInput> | ScriptCreateWithoutUserInput[] | ScriptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutUserInput | ScriptCreateOrConnectWithoutUserInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutUserInput | ScriptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScriptCreateManyUserInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutUserInput | ScriptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutUserInput | ScriptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type VoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoiceCreateWithoutUserInput, VoiceUncheckedCreateWithoutUserInput> | VoiceCreateWithoutUserInput[] | VoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutUserInput | VoiceCreateOrConnectWithoutUserInput[]
    upsert?: VoiceUpsertWithWhereUniqueWithoutUserInput | VoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoiceCreateManyUserInputEnvelope
    set?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    disconnect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    delete?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    update?: VoiceUpdateWithWhereUniqueWithoutUserInput | VoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoiceUpdateManyWithWhereWithoutUserInput | VoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoiceScalarWhereInput | VoiceScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutAnonymousUserInput = {
    create?: XOR<ProjectCreateWithoutAnonymousUserInput, ProjectUncheckedCreateWithoutAnonymousUserInput> | ProjectCreateWithoutAnonymousUserInput[] | ProjectUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAnonymousUserInput | ProjectCreateOrConnectWithoutAnonymousUserInput[]
    createMany?: ProjectCreateManyAnonymousUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ScriptCreateNestedManyWithoutAnonymousUserInput = {
    create?: XOR<ScriptCreateWithoutAnonymousUserInput, ScriptUncheckedCreateWithoutAnonymousUserInput> | ScriptCreateWithoutAnonymousUserInput[] | ScriptUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutAnonymousUserInput | ScriptCreateOrConnectWithoutAnonymousUserInput[]
    createMany?: ScriptCreateManyAnonymousUserInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type VoiceCreateNestedManyWithoutAnonymousUserInput = {
    create?: XOR<VoiceCreateWithoutAnonymousUserInput, VoiceUncheckedCreateWithoutAnonymousUserInput> | VoiceCreateWithoutAnonymousUserInput[] | VoiceUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutAnonymousUserInput | VoiceCreateOrConnectWithoutAnonymousUserInput[]
    createMany?: VoiceCreateManyAnonymousUserInputEnvelope
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutAnonymousUserInput = {
    create?: XOR<ProjectCreateWithoutAnonymousUserInput, ProjectUncheckedCreateWithoutAnonymousUserInput> | ProjectCreateWithoutAnonymousUserInput[] | ProjectUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAnonymousUserInput | ProjectCreateOrConnectWithoutAnonymousUserInput[]
    createMany?: ProjectCreateManyAnonymousUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ScriptUncheckedCreateNestedManyWithoutAnonymousUserInput = {
    create?: XOR<ScriptCreateWithoutAnonymousUserInput, ScriptUncheckedCreateWithoutAnonymousUserInput> | ScriptCreateWithoutAnonymousUserInput[] | ScriptUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutAnonymousUserInput | ScriptCreateOrConnectWithoutAnonymousUserInput[]
    createMany?: ScriptCreateManyAnonymousUserInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type VoiceUncheckedCreateNestedManyWithoutAnonymousUserInput = {
    create?: XOR<VoiceCreateWithoutAnonymousUserInput, VoiceUncheckedCreateWithoutAnonymousUserInput> | VoiceCreateWithoutAnonymousUserInput[] | VoiceUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutAnonymousUserInput | VoiceCreateOrConnectWithoutAnonymousUserInput[]
    createMany?: VoiceCreateManyAnonymousUserInputEnvelope
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateManyWithoutAnonymousUserNestedInput = {
    create?: XOR<ProjectCreateWithoutAnonymousUserInput, ProjectUncheckedCreateWithoutAnonymousUserInput> | ProjectCreateWithoutAnonymousUserInput[] | ProjectUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAnonymousUserInput | ProjectCreateOrConnectWithoutAnonymousUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAnonymousUserInput | ProjectUpsertWithWhereUniqueWithoutAnonymousUserInput[]
    createMany?: ProjectCreateManyAnonymousUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAnonymousUserInput | ProjectUpdateWithWhereUniqueWithoutAnonymousUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAnonymousUserInput | ProjectUpdateManyWithWhereWithoutAnonymousUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ScriptUpdateManyWithoutAnonymousUserNestedInput = {
    create?: XOR<ScriptCreateWithoutAnonymousUserInput, ScriptUncheckedCreateWithoutAnonymousUserInput> | ScriptCreateWithoutAnonymousUserInput[] | ScriptUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutAnonymousUserInput | ScriptCreateOrConnectWithoutAnonymousUserInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutAnonymousUserInput | ScriptUpsertWithWhereUniqueWithoutAnonymousUserInput[]
    createMany?: ScriptCreateManyAnonymousUserInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutAnonymousUserInput | ScriptUpdateWithWhereUniqueWithoutAnonymousUserInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutAnonymousUserInput | ScriptUpdateManyWithWhereWithoutAnonymousUserInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type VoiceUpdateManyWithoutAnonymousUserNestedInput = {
    create?: XOR<VoiceCreateWithoutAnonymousUserInput, VoiceUncheckedCreateWithoutAnonymousUserInput> | VoiceCreateWithoutAnonymousUserInput[] | VoiceUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutAnonymousUserInput | VoiceCreateOrConnectWithoutAnonymousUserInput[]
    upsert?: VoiceUpsertWithWhereUniqueWithoutAnonymousUserInput | VoiceUpsertWithWhereUniqueWithoutAnonymousUserInput[]
    createMany?: VoiceCreateManyAnonymousUserInputEnvelope
    set?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    disconnect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    delete?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    update?: VoiceUpdateWithWhereUniqueWithoutAnonymousUserInput | VoiceUpdateWithWhereUniqueWithoutAnonymousUserInput[]
    updateMany?: VoiceUpdateManyWithWhereWithoutAnonymousUserInput | VoiceUpdateManyWithWhereWithoutAnonymousUserInput[]
    deleteMany?: VoiceScalarWhereInput | VoiceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutAnonymousUserNestedInput = {
    create?: XOR<ProjectCreateWithoutAnonymousUserInput, ProjectUncheckedCreateWithoutAnonymousUserInput> | ProjectCreateWithoutAnonymousUserInput[] | ProjectUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAnonymousUserInput | ProjectCreateOrConnectWithoutAnonymousUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAnonymousUserInput | ProjectUpsertWithWhereUniqueWithoutAnonymousUserInput[]
    createMany?: ProjectCreateManyAnonymousUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAnonymousUserInput | ProjectUpdateWithWhereUniqueWithoutAnonymousUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAnonymousUserInput | ProjectUpdateManyWithWhereWithoutAnonymousUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ScriptUncheckedUpdateManyWithoutAnonymousUserNestedInput = {
    create?: XOR<ScriptCreateWithoutAnonymousUserInput, ScriptUncheckedCreateWithoutAnonymousUserInput> | ScriptCreateWithoutAnonymousUserInput[] | ScriptUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutAnonymousUserInput | ScriptCreateOrConnectWithoutAnonymousUserInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutAnonymousUserInput | ScriptUpsertWithWhereUniqueWithoutAnonymousUserInput[]
    createMany?: ScriptCreateManyAnonymousUserInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutAnonymousUserInput | ScriptUpdateWithWhereUniqueWithoutAnonymousUserInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutAnonymousUserInput | ScriptUpdateManyWithWhereWithoutAnonymousUserInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type VoiceUncheckedUpdateManyWithoutAnonymousUserNestedInput = {
    create?: XOR<VoiceCreateWithoutAnonymousUserInput, VoiceUncheckedCreateWithoutAnonymousUserInput> | VoiceCreateWithoutAnonymousUserInput[] | VoiceUncheckedCreateWithoutAnonymousUserInput[]
    connectOrCreate?: VoiceCreateOrConnectWithoutAnonymousUserInput | VoiceCreateOrConnectWithoutAnonymousUserInput[]
    upsert?: VoiceUpsertWithWhereUniqueWithoutAnonymousUserInput | VoiceUpsertWithWhereUniqueWithoutAnonymousUserInput[]
    createMany?: VoiceCreateManyAnonymousUserInputEnvelope
    set?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    disconnect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    delete?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    connect?: VoiceWhereUniqueInput | VoiceWhereUniqueInput[]
    update?: VoiceUpdateWithWhereUniqueWithoutAnonymousUserInput | VoiceUpdateWithWhereUniqueWithoutAnonymousUserInput[]
    updateMany?: VoiceUpdateManyWithWhereWithoutAnonymousUserInput | VoiceUpdateManyWithWhereWithoutAnonymousUserInput[]
    deleteMany?: VoiceScalarWhereInput | VoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type AnonymousUserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<AnonymousUserCreateWithoutProjectsInput, AnonymousUserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AnonymousUserCreateOrConnectWithoutProjectsInput
    connect?: AnonymousUserWhereUniqueInput
  }

  export type ScriptCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScriptCreateWithoutProjectInput, ScriptUncheckedCreateWithoutProjectInput> | ScriptCreateWithoutProjectInput[] | ScriptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutProjectInput | ScriptCreateOrConnectWithoutProjectInput[]
    createMany?: ScriptCreateManyProjectInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type ScriptUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScriptCreateWithoutProjectInput, ScriptUncheckedCreateWithoutProjectInput> | ScriptCreateWithoutProjectInput[] | ScriptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutProjectInput | ScriptCreateOrConnectWithoutProjectInput[]
    createMany?: ScriptCreateManyProjectInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type AnonymousUserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<AnonymousUserCreateWithoutProjectsInput, AnonymousUserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AnonymousUserCreateOrConnectWithoutProjectsInput
    upsert?: AnonymousUserUpsertWithoutProjectsInput
    disconnect?: AnonymousUserWhereInput | boolean
    delete?: AnonymousUserWhereInput | boolean
    connect?: AnonymousUserWhereUniqueInput
    update?: XOR<XOR<AnonymousUserUpdateToOneWithWhereWithoutProjectsInput, AnonymousUserUpdateWithoutProjectsInput>, AnonymousUserUncheckedUpdateWithoutProjectsInput>
  }

  export type ScriptUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScriptCreateWithoutProjectInput, ScriptUncheckedCreateWithoutProjectInput> | ScriptCreateWithoutProjectInput[] | ScriptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutProjectInput | ScriptCreateOrConnectWithoutProjectInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutProjectInput | ScriptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScriptCreateManyProjectInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutProjectInput | ScriptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutProjectInput | ScriptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type ScriptUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScriptCreateWithoutProjectInput, ScriptUncheckedCreateWithoutProjectInput> | ScriptCreateWithoutProjectInput[] | ScriptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutProjectInput | ScriptCreateOrConnectWithoutProjectInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutProjectInput | ScriptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScriptCreateManyProjectInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutProjectInput | ScriptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutProjectInput | ScriptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutScriptsInput = {
    create?: XOR<UserCreateWithoutScriptsInput, UserUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScriptsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutScriptsInput = {
    create?: XOR<ProjectCreateWithoutScriptsInput, ProjectUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutScriptsInput
    connect?: ProjectWhereUniqueInput
  }

  export type VoiceCreateNestedOneWithoutScriptInput = {
    create?: XOR<VoiceCreateWithoutScriptInput, VoiceUncheckedCreateWithoutScriptInput>
    connectOrCreate?: VoiceCreateOrConnectWithoutScriptInput
    connect?: VoiceWhereUniqueInput
  }

  export type AnonymousUserCreateNestedOneWithoutScriptsInput = {
    create?: XOR<AnonymousUserCreateWithoutScriptsInput, AnonymousUserUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: AnonymousUserCreateOrConnectWithoutScriptsInput
    connect?: AnonymousUserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScriptsNestedInput = {
    create?: XOR<UserCreateWithoutScriptsInput, UserUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScriptsInput
    upsert?: UserUpsertWithoutScriptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScriptsInput, UserUpdateWithoutScriptsInput>, UserUncheckedUpdateWithoutScriptsInput>
  }

  export type ProjectUpdateOneRequiredWithoutScriptsNestedInput = {
    create?: XOR<ProjectCreateWithoutScriptsInput, ProjectUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutScriptsInput
    upsert?: ProjectUpsertWithoutScriptsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutScriptsInput, ProjectUpdateWithoutScriptsInput>, ProjectUncheckedUpdateWithoutScriptsInput>
  }

  export type VoiceUpdateOneWithoutScriptNestedInput = {
    create?: XOR<VoiceCreateWithoutScriptInput, VoiceUncheckedCreateWithoutScriptInput>
    connectOrCreate?: VoiceCreateOrConnectWithoutScriptInput
    upsert?: VoiceUpsertWithoutScriptInput
    disconnect?: VoiceWhereInput | boolean
    delete?: VoiceWhereInput | boolean
    connect?: VoiceWhereUniqueInput
    update?: XOR<XOR<VoiceUpdateToOneWithWhereWithoutScriptInput, VoiceUpdateWithoutScriptInput>, VoiceUncheckedUpdateWithoutScriptInput>
  }

  export type AnonymousUserUpdateOneWithoutScriptsNestedInput = {
    create?: XOR<AnonymousUserCreateWithoutScriptsInput, AnonymousUserUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: AnonymousUserCreateOrConnectWithoutScriptsInput
    upsert?: AnonymousUserUpsertWithoutScriptsInput
    disconnect?: AnonymousUserWhereInput | boolean
    delete?: AnonymousUserWhereInput | boolean
    connect?: AnonymousUserWhereUniqueInput
    update?: XOR<XOR<AnonymousUserUpdateToOneWithWhereWithoutScriptsInput, AnonymousUserUpdateWithoutScriptsInput>, AnonymousUserUncheckedUpdateWithoutScriptsInput>
  }

  export type UserCreateNestedOneWithoutVoicesInput = {
    create?: XOR<UserCreateWithoutVoicesInput, UserUncheckedCreateWithoutVoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoicesInput
    connect?: UserWhereUniqueInput
  }

  export type AnonymousUserCreateNestedOneWithoutVoicesInput = {
    create?: XOR<AnonymousUserCreateWithoutVoicesInput, AnonymousUserUncheckedCreateWithoutVoicesInput>
    connectOrCreate?: AnonymousUserCreateOrConnectWithoutVoicesInput
    connect?: AnonymousUserWhereUniqueInput
  }

  export type ScriptCreateNestedManyWithoutVoicesInput = {
    create?: XOR<ScriptCreateWithoutVoicesInput, ScriptUncheckedCreateWithoutVoicesInput> | ScriptCreateWithoutVoicesInput[] | ScriptUncheckedCreateWithoutVoicesInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutVoicesInput | ScriptCreateOrConnectWithoutVoicesInput[]
    createMany?: ScriptCreateManyVoicesInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type ScriptUncheckedCreateNestedManyWithoutVoicesInput = {
    create?: XOR<ScriptCreateWithoutVoicesInput, ScriptUncheckedCreateWithoutVoicesInput> | ScriptCreateWithoutVoicesInput[] | ScriptUncheckedCreateWithoutVoicesInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutVoicesInput | ScriptCreateOrConnectWithoutVoicesInput[]
    createMany?: ScriptCreateManyVoicesInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVoicesNestedInput = {
    create?: XOR<UserCreateWithoutVoicesInput, UserUncheckedCreateWithoutVoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoicesInput
    upsert?: UserUpsertWithoutVoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVoicesInput, UserUpdateWithoutVoicesInput>, UserUncheckedUpdateWithoutVoicesInput>
  }

  export type AnonymousUserUpdateOneWithoutVoicesNestedInput = {
    create?: XOR<AnonymousUserCreateWithoutVoicesInput, AnonymousUserUncheckedCreateWithoutVoicesInput>
    connectOrCreate?: AnonymousUserCreateOrConnectWithoutVoicesInput
    upsert?: AnonymousUserUpsertWithoutVoicesInput
    disconnect?: AnonymousUserWhereInput | boolean
    delete?: AnonymousUserWhereInput | boolean
    connect?: AnonymousUserWhereUniqueInput
    update?: XOR<XOR<AnonymousUserUpdateToOneWithWhereWithoutVoicesInput, AnonymousUserUpdateWithoutVoicesInput>, AnonymousUserUncheckedUpdateWithoutVoicesInput>
  }

  export type ScriptUpdateManyWithoutVoicesNestedInput = {
    create?: XOR<ScriptCreateWithoutVoicesInput, ScriptUncheckedCreateWithoutVoicesInput> | ScriptCreateWithoutVoicesInput[] | ScriptUncheckedCreateWithoutVoicesInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutVoicesInput | ScriptCreateOrConnectWithoutVoicesInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutVoicesInput | ScriptUpsertWithWhereUniqueWithoutVoicesInput[]
    createMany?: ScriptCreateManyVoicesInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutVoicesInput | ScriptUpdateWithWhereUniqueWithoutVoicesInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutVoicesInput | ScriptUpdateManyWithWhereWithoutVoicesInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type ScriptUncheckedUpdateManyWithoutVoicesNestedInput = {
    create?: XOR<ScriptCreateWithoutVoicesInput, ScriptUncheckedCreateWithoutVoicesInput> | ScriptCreateWithoutVoicesInput[] | ScriptUncheckedCreateWithoutVoicesInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutVoicesInput | ScriptCreateOrConnectWithoutVoicesInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutVoicesInput | ScriptUpsertWithWhereUniqueWithoutVoicesInput[]
    createMany?: ScriptCreateManyVoicesInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutVoicesInput | ScriptUpdateWithWhereUniqueWithoutVoicesInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutVoicesInput | ScriptUpdateManyWithWhereWithoutVoicesInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    anonymousUser?: AnonymousUserCreateNestedOneWithoutProjectsInput
    scripts?: ScriptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    anonymousUserId?: string | null
    scripts?: ScriptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScriptCreateWithoutUserInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutScriptsInput
    voices?: VoiceCreateNestedOneWithoutScriptInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutScriptsInput
  }

  export type ScriptUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    projectId: string
    voicesId?: string | null
    anonymousUserId?: string | null
  }

  export type ScriptCreateOrConnectWithoutUserInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutUserInput, ScriptUncheckedCreateWithoutUserInput>
  }

  export type ScriptCreateManyUserInputEnvelope = {
    data: ScriptCreateManyUserInput | ScriptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoiceCreateWithoutUserInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    anonymousUser?: AnonymousUserCreateNestedOneWithoutVoicesInput
    script?: ScriptCreateNestedManyWithoutVoicesInput
  }

  export type VoiceUncheckedCreateWithoutUserInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    anonymousUserId?: string | null
    script?: ScriptUncheckedCreateNestedManyWithoutVoicesInput
  }

  export type VoiceCreateOrConnectWithoutUserInput = {
    where: VoiceWhereUniqueInput
    create: XOR<VoiceCreateWithoutUserInput, VoiceUncheckedCreateWithoutUserInput>
  }

  export type VoiceCreateManyUserInputEnvelope = {
    data: VoiceCreateManyUserInput | VoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    username?: StringFilter<"Project"> | string
    email?: StringFilter<"Project"> | string
    password?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    userId?: StringFilter<"Project"> | string
    anonymousUserId?: StringNullableFilter<"Project"> | string | null
  }

  export type ScriptUpsertWithWhereUniqueWithoutUserInput = {
    where: ScriptWhereUniqueInput
    update: XOR<ScriptUpdateWithoutUserInput, ScriptUncheckedUpdateWithoutUserInput>
    create: XOR<ScriptCreateWithoutUserInput, ScriptUncheckedCreateWithoutUserInput>
  }

  export type ScriptUpdateWithWhereUniqueWithoutUserInput = {
    where: ScriptWhereUniqueInput
    data: XOR<ScriptUpdateWithoutUserInput, ScriptUncheckedUpdateWithoutUserInput>
  }

  export type ScriptUpdateManyWithWhereWithoutUserInput = {
    where: ScriptScalarWhereInput
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyWithoutUserInput>
  }

  export type ScriptScalarWhereInput = {
    AND?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
    OR?: ScriptScalarWhereInput[]
    NOT?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
    id?: StringFilter<"Script"> | string
    title?: StringFilter<"Script"> | string
    type?: StringFilter<"Script"> | string
    text?: StringFilter<"Script"> | string
    metadata?: StringFilter<"Script"> | string
    createdAt?: DateTimeFilter<"Script"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Script"> | Date | string | null
    userId?: StringFilter<"Script"> | string
    projectId?: StringFilter<"Script"> | string
    voicesId?: StringNullableFilter<"Script"> | string | null
    anonymousUserId?: StringNullableFilter<"Script"> | string | null
  }

  export type VoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: VoiceWhereUniqueInput
    update: XOR<VoiceUpdateWithoutUserInput, VoiceUncheckedUpdateWithoutUserInput>
    create: XOR<VoiceCreateWithoutUserInput, VoiceUncheckedCreateWithoutUserInput>
  }

  export type VoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: VoiceWhereUniqueInput
    data: XOR<VoiceUpdateWithoutUserInput, VoiceUncheckedUpdateWithoutUserInput>
  }

  export type VoiceUpdateManyWithWhereWithoutUserInput = {
    where: VoiceScalarWhereInput
    data: XOR<VoiceUpdateManyMutationInput, VoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type VoiceScalarWhereInput = {
    AND?: VoiceScalarWhereInput | VoiceScalarWhereInput[]
    OR?: VoiceScalarWhereInput[]
    NOT?: VoiceScalarWhereInput | VoiceScalarWhereInput[]
    id?: StringFilter<"Voice"> | string
    hash?: StringFilter<"Voice"> | string
    metadata?: StringFilter<"Voice"> | string
    createdAt?: DateTimeFilter<"Voice"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Voice"> | Date | string | null
    userId?: StringFilter<"Voice"> | string
    anonymousUserId?: StringNullableFilter<"Voice"> | string | null
  }

  export type ProjectCreateWithoutAnonymousUserInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProjectsInput
    scripts?: ScriptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAnonymousUserInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    scripts?: ScriptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAnonymousUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAnonymousUserInput, ProjectUncheckedCreateWithoutAnonymousUserInput>
  }

  export type ProjectCreateManyAnonymousUserInputEnvelope = {
    data: ProjectCreateManyAnonymousUserInput | ProjectCreateManyAnonymousUserInput[]
    skipDuplicates?: boolean
  }

  export type ScriptCreateWithoutAnonymousUserInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutScriptsInput
    project: ProjectCreateNestedOneWithoutScriptsInput
    voices?: VoiceCreateNestedOneWithoutScriptInput
  }

  export type ScriptUncheckedCreateWithoutAnonymousUserInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    projectId: string
    voicesId?: string | null
  }

  export type ScriptCreateOrConnectWithoutAnonymousUserInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutAnonymousUserInput, ScriptUncheckedCreateWithoutAnonymousUserInput>
  }

  export type ScriptCreateManyAnonymousUserInputEnvelope = {
    data: ScriptCreateManyAnonymousUserInput | ScriptCreateManyAnonymousUserInput[]
    skipDuplicates?: boolean
  }

  export type VoiceCreateWithoutAnonymousUserInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVoicesInput
    script?: ScriptCreateNestedManyWithoutVoicesInput
  }

  export type VoiceUncheckedCreateWithoutAnonymousUserInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    script?: ScriptUncheckedCreateNestedManyWithoutVoicesInput
  }

  export type VoiceCreateOrConnectWithoutAnonymousUserInput = {
    where: VoiceWhereUniqueInput
    create: XOR<VoiceCreateWithoutAnonymousUserInput, VoiceUncheckedCreateWithoutAnonymousUserInput>
  }

  export type VoiceCreateManyAnonymousUserInputEnvelope = {
    data: VoiceCreateManyAnonymousUserInput | VoiceCreateManyAnonymousUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutAnonymousUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutAnonymousUserInput, ProjectUncheckedUpdateWithoutAnonymousUserInput>
    create: XOR<ProjectCreateWithoutAnonymousUserInput, ProjectUncheckedCreateWithoutAnonymousUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutAnonymousUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutAnonymousUserInput, ProjectUncheckedUpdateWithoutAnonymousUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutAnonymousUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutAnonymousUserInput>
  }

  export type ScriptUpsertWithWhereUniqueWithoutAnonymousUserInput = {
    where: ScriptWhereUniqueInput
    update: XOR<ScriptUpdateWithoutAnonymousUserInput, ScriptUncheckedUpdateWithoutAnonymousUserInput>
    create: XOR<ScriptCreateWithoutAnonymousUserInput, ScriptUncheckedCreateWithoutAnonymousUserInput>
  }

  export type ScriptUpdateWithWhereUniqueWithoutAnonymousUserInput = {
    where: ScriptWhereUniqueInput
    data: XOR<ScriptUpdateWithoutAnonymousUserInput, ScriptUncheckedUpdateWithoutAnonymousUserInput>
  }

  export type ScriptUpdateManyWithWhereWithoutAnonymousUserInput = {
    where: ScriptScalarWhereInput
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyWithoutAnonymousUserInput>
  }

  export type VoiceUpsertWithWhereUniqueWithoutAnonymousUserInput = {
    where: VoiceWhereUniqueInput
    update: XOR<VoiceUpdateWithoutAnonymousUserInput, VoiceUncheckedUpdateWithoutAnonymousUserInput>
    create: XOR<VoiceCreateWithoutAnonymousUserInput, VoiceUncheckedCreateWithoutAnonymousUserInput>
  }

  export type VoiceUpdateWithWhereUniqueWithoutAnonymousUserInput = {
    where: VoiceWhereUniqueInput
    data: XOR<VoiceUpdateWithoutAnonymousUserInput, VoiceUncheckedUpdateWithoutAnonymousUserInput>
  }

  export type VoiceUpdateManyWithWhereWithoutAnonymousUserInput = {
    where: VoiceScalarWhereInput
    data: XOR<VoiceUpdateManyMutationInput, VoiceUncheckedUpdateManyWithoutAnonymousUserInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    scripts?: ScriptCreateNestedManyWithoutUserInput
    voices?: VoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    scripts?: ScriptUncheckedCreateNestedManyWithoutUserInput
    voices?: VoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type AnonymousUserCreateWithoutProjectsInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    scripts?: ScriptCreateNestedManyWithoutAnonymousUserInput
    voices?: VoiceCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserUncheckedCreateWithoutProjectsInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    scripts?: ScriptUncheckedCreateNestedManyWithoutAnonymousUserInput
    voices?: VoiceUncheckedCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserCreateOrConnectWithoutProjectsInput = {
    where: AnonymousUserWhereUniqueInput
    create: XOR<AnonymousUserCreateWithoutProjectsInput, AnonymousUserUncheckedCreateWithoutProjectsInput>
  }

  export type ScriptCreateWithoutProjectInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutScriptsInput
    voices?: VoiceCreateNestedOneWithoutScriptInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutScriptsInput
  }

  export type ScriptUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    voicesId?: string | null
    anonymousUserId?: string | null
  }

  export type ScriptCreateOrConnectWithoutProjectInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutProjectInput, ScriptUncheckedCreateWithoutProjectInput>
  }

  export type ScriptCreateManyProjectInputEnvelope = {
    data: ScriptCreateManyProjectInput | ScriptCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scripts?: ScriptUpdateManyWithoutUserNestedInput
    voices?: VoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scripts?: ScriptUncheckedUpdateManyWithoutUserNestedInput
    voices?: VoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnonymousUserUpsertWithoutProjectsInput = {
    update: XOR<AnonymousUserUpdateWithoutProjectsInput, AnonymousUserUncheckedUpdateWithoutProjectsInput>
    create: XOR<AnonymousUserCreateWithoutProjectsInput, AnonymousUserUncheckedCreateWithoutProjectsInput>
    where?: AnonymousUserWhereInput
  }

  export type AnonymousUserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: AnonymousUserWhereInput
    data: XOR<AnonymousUserUpdateWithoutProjectsInput, AnonymousUserUncheckedUpdateWithoutProjectsInput>
  }

  export type AnonymousUserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scripts?: ScriptUpdateManyWithoutAnonymousUserNestedInput
    voices?: VoiceUpdateManyWithoutAnonymousUserNestedInput
  }

  export type AnonymousUserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scripts?: ScriptUncheckedUpdateManyWithoutAnonymousUserNestedInput
    voices?: VoiceUncheckedUpdateManyWithoutAnonymousUserNestedInput
  }

  export type ScriptUpsertWithWhereUniqueWithoutProjectInput = {
    where: ScriptWhereUniqueInput
    update: XOR<ScriptUpdateWithoutProjectInput, ScriptUncheckedUpdateWithoutProjectInput>
    create: XOR<ScriptCreateWithoutProjectInput, ScriptUncheckedCreateWithoutProjectInput>
  }

  export type ScriptUpdateWithWhereUniqueWithoutProjectInput = {
    where: ScriptWhereUniqueInput
    data: XOR<ScriptUpdateWithoutProjectInput, ScriptUncheckedUpdateWithoutProjectInput>
  }

  export type ScriptUpdateManyWithWhereWithoutProjectInput = {
    where: ScriptScalarWhereInput
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutScriptsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    voices?: VoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScriptsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    voices?: VoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScriptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScriptsInput, UserUncheckedCreateWithoutScriptsInput>
  }

  export type ProjectCreateWithoutScriptsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProjectsInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutScriptsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    anonymousUserId?: string | null
  }

  export type ProjectCreateOrConnectWithoutScriptsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutScriptsInput, ProjectUncheckedCreateWithoutScriptsInput>
  }

  export type VoiceCreateWithoutScriptInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVoicesInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutVoicesInput
  }

  export type VoiceUncheckedCreateWithoutScriptInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    anonymousUserId?: string | null
  }

  export type VoiceCreateOrConnectWithoutScriptInput = {
    where: VoiceWhereUniqueInput
    create: XOR<VoiceCreateWithoutScriptInput, VoiceUncheckedCreateWithoutScriptInput>
  }

  export type AnonymousUserCreateWithoutScriptsInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutAnonymousUserInput
    voices?: VoiceCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserUncheckedCreateWithoutScriptsInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutAnonymousUserInput
    voices?: VoiceUncheckedCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserCreateOrConnectWithoutScriptsInput = {
    where: AnonymousUserWhereUniqueInput
    create: XOR<AnonymousUserCreateWithoutScriptsInput, AnonymousUserUncheckedCreateWithoutScriptsInput>
  }

  export type UserUpsertWithoutScriptsInput = {
    update: XOR<UserUpdateWithoutScriptsInput, UserUncheckedUpdateWithoutScriptsInput>
    create: XOR<UserCreateWithoutScriptsInput, UserUncheckedCreateWithoutScriptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScriptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScriptsInput, UserUncheckedUpdateWithoutScriptsInput>
  }

  export type UserUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    voices?: VoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    voices?: VoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutScriptsInput = {
    update: XOR<ProjectUpdateWithoutScriptsInput, ProjectUncheckedUpdateWithoutScriptsInput>
    create: XOR<ProjectCreateWithoutScriptsInput, ProjectUncheckedCreateWithoutScriptsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutScriptsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutScriptsInput, ProjectUncheckedUpdateWithoutScriptsInput>
  }

  export type ProjectUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoiceUpsertWithoutScriptInput = {
    update: XOR<VoiceUpdateWithoutScriptInput, VoiceUncheckedUpdateWithoutScriptInput>
    create: XOR<VoiceCreateWithoutScriptInput, VoiceUncheckedCreateWithoutScriptInput>
    where?: VoiceWhereInput
  }

  export type VoiceUpdateToOneWithWhereWithoutScriptInput = {
    where?: VoiceWhereInput
    data: XOR<VoiceUpdateWithoutScriptInput, VoiceUncheckedUpdateWithoutScriptInput>
  }

  export type VoiceUpdateWithoutScriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVoicesNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutVoicesNestedInput
  }

  export type VoiceUncheckedUpdateWithoutScriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnonymousUserUpsertWithoutScriptsInput = {
    update: XOR<AnonymousUserUpdateWithoutScriptsInput, AnonymousUserUncheckedUpdateWithoutScriptsInput>
    create: XOR<AnonymousUserCreateWithoutScriptsInput, AnonymousUserUncheckedCreateWithoutScriptsInput>
    where?: AnonymousUserWhereInput
  }

  export type AnonymousUserUpdateToOneWithWhereWithoutScriptsInput = {
    where?: AnonymousUserWhereInput
    data: XOR<AnonymousUserUpdateWithoutScriptsInput, AnonymousUserUncheckedUpdateWithoutScriptsInput>
  }

  export type AnonymousUserUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutAnonymousUserNestedInput
    voices?: VoiceUpdateManyWithoutAnonymousUserNestedInput
  }

  export type AnonymousUserUncheckedUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutAnonymousUserNestedInput
    voices?: VoiceUncheckedUpdateManyWithoutAnonymousUserNestedInput
  }

  export type UserCreateWithoutVoicesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    scripts?: ScriptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVoicesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVoicesInput, UserUncheckedCreateWithoutVoicesInput>
  }

  export type AnonymousUserCreateWithoutVoicesInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutAnonymousUserInput
    scripts?: ScriptCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserUncheckedCreateWithoutVoicesInput = {
    id?: string
    joinedAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutAnonymousUserInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutAnonymousUserInput
  }

  export type AnonymousUserCreateOrConnectWithoutVoicesInput = {
    where: AnonymousUserWhereUniqueInput
    create: XOR<AnonymousUserCreateWithoutVoicesInput, AnonymousUserUncheckedCreateWithoutVoicesInput>
  }

  export type ScriptCreateWithoutVoicesInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutScriptsInput
    project: ProjectCreateNestedOneWithoutScriptsInput
    anonymousUser?: AnonymousUserCreateNestedOneWithoutScriptsInput
  }

  export type ScriptUncheckedCreateWithoutVoicesInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    projectId: string
    anonymousUserId?: string | null
  }

  export type ScriptCreateOrConnectWithoutVoicesInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutVoicesInput, ScriptUncheckedCreateWithoutVoicesInput>
  }

  export type ScriptCreateManyVoicesInputEnvelope = {
    data: ScriptCreateManyVoicesInput | ScriptCreateManyVoicesInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVoicesInput = {
    update: XOR<UserUpdateWithoutVoicesInput, UserUncheckedUpdateWithoutVoicesInput>
    create: XOR<UserCreateWithoutVoicesInput, UserUncheckedCreateWithoutVoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVoicesInput, UserUncheckedUpdateWithoutVoicesInput>
  }

  export type UserUpdateWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    scripts?: ScriptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnonymousUserUpsertWithoutVoicesInput = {
    update: XOR<AnonymousUserUpdateWithoutVoicesInput, AnonymousUserUncheckedUpdateWithoutVoicesInput>
    create: XOR<AnonymousUserCreateWithoutVoicesInput, AnonymousUserUncheckedCreateWithoutVoicesInput>
    where?: AnonymousUserWhereInput
  }

  export type AnonymousUserUpdateToOneWithWhereWithoutVoicesInput = {
    where?: AnonymousUserWhereInput
    data: XOR<AnonymousUserUpdateWithoutVoicesInput, AnonymousUserUncheckedUpdateWithoutVoicesInput>
  }

  export type AnonymousUserUpdateWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutAnonymousUserNestedInput
    scripts?: ScriptUpdateManyWithoutAnonymousUserNestedInput
  }

  export type AnonymousUserUncheckedUpdateWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutAnonymousUserNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutAnonymousUserNestedInput
  }

  export type ScriptUpsertWithWhereUniqueWithoutVoicesInput = {
    where: ScriptWhereUniqueInput
    update: XOR<ScriptUpdateWithoutVoicesInput, ScriptUncheckedUpdateWithoutVoicesInput>
    create: XOR<ScriptCreateWithoutVoicesInput, ScriptUncheckedCreateWithoutVoicesInput>
  }

  export type ScriptUpdateWithWhereUniqueWithoutVoicesInput = {
    where: ScriptWhereUniqueInput
    data: XOR<ScriptUpdateWithoutVoicesInput, ScriptUncheckedUpdateWithoutVoicesInput>
  }

  export type ScriptUpdateManyWithWhereWithoutVoicesInput = {
    where: ScriptScalarWhereInput
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyWithoutVoicesInput>
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    anonymousUserId?: string | null
  }

  export type ScriptCreateManyUserInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    projectId: string
    voicesId?: string | null
    anonymousUserId?: string | null
  }

  export type VoiceCreateManyUserInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    anonymousUserId?: string | null
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anonymousUser?: AnonymousUserUpdateOneWithoutProjectsNestedInput
    scripts?: ScriptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
    scripts?: ScriptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutScriptsNestedInput
    voices?: VoiceUpdateOneWithoutScriptNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutScriptsNestedInput
  }

  export type ScriptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anonymousUser?: AnonymousUserUpdateOneWithoutVoicesNestedInput
    script?: ScriptUpdateManyWithoutVoicesNestedInput
  }

  export type VoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
    script?: ScriptUncheckedUpdateManyWithoutVoicesNestedInput
  }

  export type VoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateManyAnonymousUserInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
  }

  export type ScriptCreateManyAnonymousUserInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    projectId: string
    voicesId?: string | null
  }

  export type VoiceCreateManyAnonymousUserInput = {
    id?: string
    hash: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
  }

  export type ProjectUpdateWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    scripts?: ScriptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    scripts?: ScriptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScriptUpdateWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput
    project?: ProjectUpdateOneRequiredWithoutScriptsNestedInput
    voices?: VoiceUpdateOneWithoutScriptNestedInput
  }

  export type ScriptUncheckedUpdateWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptUncheckedUpdateManyWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoiceUpdateWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVoicesNestedInput
    script?: ScriptUpdateManyWithoutVoicesNestedInput
  }

  export type VoiceUncheckedUpdateWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    script?: ScriptUncheckedUpdateManyWithoutVoicesNestedInput
  }

  export type VoiceUncheckedUpdateManyWithoutAnonymousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScriptCreateManyProjectInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    voicesId?: string | null
    anonymousUserId?: string | null
  }

  export type ScriptUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput
    voices?: VoiceUpdateOneWithoutScriptNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutScriptsNestedInput
  }

  export type ScriptUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    voicesId?: NullableStringFieldUpdateOperationsInput | string | null
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptCreateManyVoicesInput = {
    id?: string
    title: string
    type: string
    text: string
    metadata: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    projectId: string
    anonymousUserId?: string | null
  }

  export type ScriptUpdateWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput
    project?: ProjectUpdateOneRequiredWithoutScriptsNestedInput
    anonymousUser?: AnonymousUserUpdateOneWithoutScriptsNestedInput
  }

  export type ScriptUncheckedUpdateWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScriptUncheckedUpdateManyWithoutVoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    anonymousUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}