/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TestResultInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testResult.createMany(input as any))),

        create: procedure.input($Schema.TestResultInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testResult.create(input as any))),

        deleteMany: procedure.input($Schema.TestResultInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testResult.deleteMany(input as any))),

        delete: procedure.input($Schema.TestResultInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testResult.delete(input as any))),

        findFirst: procedure.input($Schema.TestResultInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).testResult.findFirst(input as any))),

        findMany: procedure.input($Schema.TestResultInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).testResult.findMany(input as any))),

        findUnique: procedure.input($Schema.TestResultInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).testResult.findUnique(input as any))),

        updateMany: procedure.input($Schema.TestResultInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testResult.updateMany(input as any))),

        update: procedure.input($Schema.TestResultInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testResult.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TestResultCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestResultCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestResultCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestResultCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TestResultCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestResultCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestResultGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestResultGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestResultCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestResultCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestResultGetPayload<T>, Context>) => Promise<Prisma.TestResultGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TestResultDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestResultDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestResultDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestResultDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TestResultDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestResultDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestResultGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestResultGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestResultDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestResultDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestResultGetPayload<T>, Context>) => Promise<Prisma.TestResultGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TestResultFindFirstArgs, TData = Prisma.TestResultGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TestResultFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestResultGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestResultFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestResultFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestResultGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TestResultGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TestResultFindManyArgs, TData = Array<Prisma.TestResultGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TestResultFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TestResultGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestResultFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestResultFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TestResultGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TestResultGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TestResultFindUniqueArgs, TData = Prisma.TestResultGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TestResultFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestResultGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestResultFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestResultFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestResultGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TestResultGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TestResultUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestResultUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestResultUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestResultUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TestResultUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestResultUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestResultGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestResultGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestResultUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestResultUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestResultGetPayload<T>, Context>) => Promise<Prisma.TestResultGetPayload<T>>
            };

    };
}
