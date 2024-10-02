import { useEffect, useMemo, useState } from 'react';
import { Button } from '@v1/ui/button';
import { Input } from '@v1/ui/input';
import { Label } from '@v1/ui/label';
import { Switch } from '@v1/ui/switch';
import { cn } from '@/lib/editor/utils';
const LinkEditBlock = ({ editor, onSetLink, close, className, ...props }) => {
    const [field, setField] = useState({
        url: '',
        text: '',
        openInNewTab: false,
    });
    const data = useMemo(() => {
        const { href, target } = editor.getAttributes('link');
        const { from, to } = editor.state.selection;
        const text = editor.state.doc.textBetween(from, to, ' ');
        return {
            url: href,
            text,
            openInNewTab: target === '_blank' ? true : false,
        };
    }, [editor]);
    useEffect(() => {
        setField(data);
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSetLink(field);
        close?.();
    };
    return (<form onSubmit={handleSubmit}>
      <div className={cn('space-y-4', className)} {...props}>
        <div className='space-y-1'>
          <Label>Link</Label>
          <Input type='url' required placeholder='Paste a link' value={field.url ?? ''} onChange={(e) => setField({ ...field, url: e.target.value })}/>
        </div>

        <div className='space-y-1'>
          <Label>Display text (optional)</Label>
          <Input type='text' placeholder='Text to display' value={field.text ?? ''} onChange={(e) => setField({ ...field, text: e.target.value })}/>
        </div>

        <div className='flex items-center space-x-2'>
          <Label>Open in new tab</Label>
          <Switch checked={field.openInNewTab} onCheckedChange={() => setField({ ...field, openInNewTab: !field.openInNewTab })}/>
        </div>

        <div className='flex justify-end space-x-2'>
          {close && (<Button variant='ghost' type='button' onClick={close}>
              Cancel
            </Button>)}

          <Button type='submit'>Insert</Button>
        </div>
      </div>
    </form>);
};
export { LinkEditBlock };
