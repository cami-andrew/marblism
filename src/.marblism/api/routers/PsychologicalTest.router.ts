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

        createMany: procedure.input($Schema.PsychologicalTestInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).psychologicalTest.createMany(input as any))),

        create: procedure.input($Schema.PsychologicalTestInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).psychologicalTest.create(input as any))),

        deleteMany: procedure.input($Schema.PsychologicalTestInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).psychologicalTest.deleteMany(input as any))),

        delete: procedure.input($Schema.PsychologicalTestInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).psychologicalTest.delete(input as any))),

        findFirst: procedure.input($Schema.PsychologicalTestInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).psychologicalTest.findFirst(input as any))),

        findMany: procedure.input($Schema.PsychologicalTestInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).psychologicalTest.findMany(input as any))),

        findUnique: procedure.input($Schema.PsychologicalTestInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).psychologicalTest.findUnique(input as any))),

        updateMany: procedure.input($Schema.PsychologicalTestInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).psychologicalTest.updateMany(input as any))),

        update: procedure.input($Schema.PsychologicalTestInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).psychologicalTest.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PsychologicalTestCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PsychologicalTestCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PsychologicalTestCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PsychologicalTestCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PsychologicalTestCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PsychologicalTestCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PsychologicalTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PsychologicalTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PsychologicalTestCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PsychologicalTestCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PsychologicalTestGetPayload<T>, Context>) => Promise<Prisma.PsychologicalTestGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PsychologicalTestDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PsychologicalTestDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PsychologicalTestDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PsychologicalTestDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PsychologicalTestDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PsychologicalTestDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PsychologicalTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PsychologicalTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PsychologicalTestDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PsychologicalTestDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PsychologicalTestGetPayload<T>, Context>) => Promise<Prisma.PsychologicalTestGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PsychologicalTestFindFirstArgs, TData = Prisma.PsychologicalTestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PsychologicalTestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PsychologicalTestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PsychologicalTestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PsychologicalTestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PsychologicalTestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PsychologicalTestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PsychologicalTestFindManyArgs, TData = Array<Prisma.PsychologicalTestGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PsychologicalTestFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PsychologicalTestGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PsychologicalTestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PsychologicalTestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PsychologicalTestGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PsychologicalTestGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PsychologicalTestFindUniqueArgs, TData = Prisma.PsychologicalTestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PsychologicalTestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PsychologicalTestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PsychologicalTestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PsychologicalTestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PsychologicalTestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PsychologicalTestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PsychologicalTestUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PsychologicalTestUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PsychologicalTestUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PsychologicalTestUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PsychologicalTestUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PsychologicalTestUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PsychologicalTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PsychologicalTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PsychologicalTestUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PsychologicalTestUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PsychologicalTestGetPayload<T>, Context>) => Promise<Prisma.PsychologicalTestGetPayload<T>>
            };

    };
}
