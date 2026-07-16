import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useVoucher } from '../hooks';
import { voucherSchema } from '../schema';
import { type VoucherFormData } from '../types';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, PlaneTakeoff, AlertCircle } from 'lucide-react';
import { AircraftSelect } from './AircraftSelect';
import { FormSection } from './FormSection';
import { SubmitButton } from './SubmitButton';
import { VoucherHeader } from './VoucherHeader';
import { FormInput } from './FormInput';

interface VoucherFormProps {
  onSuccess: (seats: string[]) => void;
}

export default function VoucherForm({ onSuccess }: VoucherFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<VoucherFormData>({
    resolver: zodResolver(voucherSchema),
    defaultValues: {
      name: '',
      id: '',
      flightNumber: '',
      date: '',
      aircraft: 'ATR',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const { loading, error, generateVoucher } = useVoucher();

  async function onSubmit(data: VoucherFormData) {
    const seats = await generateVoucher(data);

    if (!seats) return;

    onSuccess(seats);

    reset();
  }

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <VoucherHeader />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-8">
        <FormSection title="Crew Information" icon={<User className="h-5 w-5 text-sky-600" />}>
          <div className="grid gap-5 md:grid-cols-2">
            <FormInput
              id="name"
              label="Crew Name"
              placeholder="John Doe"
              error={errors.name}
              {...register('name')}
            />

            <FormInput
              id="id"
              label="Crew ID"
              placeholder="CRW001"
              error={errors.id}
              {...register('id')}
            />
          </div>
        </FormSection>

        <FormSection
          bordered
          title="Flight Information"
          icon={<PlaneTakeoff className="h-5 w-5 text-sky-600" />}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <FormInput
              id="flightNumber"
              label="Flight Number"
              placeholder="GA123"
              error={errors.flightNumber}
              {...register('flightNumber')}
            />

            <FormInput
              id="date"
              type="date"
              label="Flight Date"
              error={errors.date}
              {...register('date')}
            />

            <AircraftSelect
              value={watch('aircraft')}
              error={errors.aircraft}
              onChange={(value) =>
                setValue('aircraft', value as VoucherFormData['aircraft'], {
                  shouldValidate: true,
                })
              }
            />
          </div>
        </FormSection>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
}
